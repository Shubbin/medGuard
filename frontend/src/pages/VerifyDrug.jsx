import { CheckCircle, ScanBarcode } from "lucide-react";
import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const VerifyDrug = () => {
  const [drugCode, setDrugCode] = useState("");
  const [scanning, setScanning] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async () => {
    setIsLoading(true);
    setVerificationResult(null);
    try {
      const res = await fetch(
        "http://localhost:8000/api/drugs/verify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nrn: drugCode }),
        }
      );

      const data = await res.json();
      setVerificationResult(data);
    } catch (error) {
      setVerificationResult({
        success: false,
        message: "Error verifying drug",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-3xl p-8 space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-blue-700">
          Verify Drug Authenticity
        </h1>
        <p className="text-center text-gray-600">
          Enter the NRN or scan the barcode below to check if the drug is
          authentic.
        </p>

        <div className="">
          <input
            type="text"
            value={drugCode}
            onChange={(e) => setDrugCode(e.target.value)}
            placeholder="Enter NRN (e.g. 04-4192)"
            className="w-full flex-1 px-4 py-3 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-center items-center gap-4">
          <button
            onClick={handleVerify}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
          >
            <CheckCircle />
            Verify
          </button>
          <button
            onClick={() => setScanning(!scanning)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
              scanning
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-600 hover:bg-green-700"
            } text-white`}
          >
            <ScanBarcode />
            {scanning ? "Stop Scanning" : "Scan Barcode"}
          </button>
        </div>

        {scanning && (
          <div className="rounded-xl overflow-hidden border-2 border-blue-400 mx-auto w-full max-w-md">
            <BarcodeScannerComponent
              width={400}
              height={300}
              onUpdate={(err, result) => {
                if (result) {
                  setDrugCode(result.text);
                  setScanning(false);
                }
              }}
            />
          </div>
        )}

        {/* 🔄 Loader */}
        {isLoading && (
          <div className="flex items-center justify-center mt-6">
            <div className="animate-spin h-10 w-10 border-4 border-blue-400 border-t-transparent rounded-full"></div>
            <p className="ml-4 text-blue-600 font-medium">Verifying drug...</p>
          </div>
        )}

        {/* 🦴 Skeleton Loader (if loading and no result yet) */}
        {isLoading && !verificationResult && (
          <div className="mt-4 space-y-2">
            <div className="h-4 bg-blue-100 rounded w-1/2 animate-pulse"></div>
            <div className="h-4 bg-blue-100 rounded w-2/3 animate-pulse"></div>
            <div className="h-4 bg-blue-100 rounded w-1/3 animate-pulse"></div>
          </div>
        )}

        {/* ✅ Verification Result */}
        {!isLoading && verificationResult && (
          <div
            className={`p-6 rounded-xl border transition-all duration-300 ${
              verificationResult.success
                ? "border-green-400 bg-green-50 text-green-800"
                : "border-red-400 bg-red-50 text-red-800"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">
              {verificationResult.message}
            </h2>
            {verificationResult.success && verificationResult.data && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Product Name:</span>{" "}
                  {verificationResult.data.product_name}
                </div>
                <div>
                  <span className="font-medium">Active Ingredients:</span>{" "}
                  {verificationResult.data.active_ingredients}
                </div>
                <div>
                  <span className="font-medium">Form:</span>{" "}
                  {verificationResult.data.form}
                </div>
                <div>
                  <span className="font-medium">Strength:</span>{" "}
                  {verificationResult.data.strengths}
                </div>
                <div>
                  <span className="font-medium">Manufacturer:</span>{" "}
                  {verificationResult.data.applicant_name}
                </div>
                <div>
                  <span className="font-medium">Approval Date:</span>{" "}
                  {new Date(
                    verificationResult.data.approval_date
                  ).toLocaleDateString()}
                </div>
                <div>
                  <span className="font-medium">Status:</span>{" "}
                  {verificationResult.data.status}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyDrug;
