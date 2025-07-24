import { Card, CardContent } from "../../components/ui/card";
import { ScanSearchIcon } from "lucide-react";

const Verification = () => {
  return (
    <section className="p-6 md:p-10 space-y-6">
      <div className="flex items-center gap-4">
        <ScanSearchIcon className="w-7 h-7 text-blue-600" />
        <h1 className="text-2xl md:text-3xl font-semibold">Drug Verification Logs</h1>
      </div>

      <Card className="shadow-md rounded-2xl">
        <CardContent className="p-6 text-gray-700">
          {/* Placeholder content, replace with actual logs or table component */}
          <p className="text-sm md:text-base">
            This section displays logs of all drug verification activities.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Verification;
