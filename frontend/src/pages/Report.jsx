// src/pages/dashboard/ReportMails.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { MailIcon } from "lucide-react";
import ReportMailList from "../../src/components/dashboardComponets/Reportmails/ReportMailList";

const ReportMails = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axios.get("/api/reports");
        if (Array.isArray(res.data)) {
          setReports(res.data);
        } else {
          console.error("Unexpected response format:", res.data);
          setReports([]);
        }
      } catch (err) {
        console.error("Failed to fetch reports:", err);
        setReports([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <div className="text-gray-600 animate-pulse text-lg">Loading report mails...</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-tr from-blue-50 to-white min-h-screen py-12 px-6 md:px-16 text-gray-800">
      <Helmet>
        <title>Report Suspicious Drug | MedGuard</title>
        <meta
          name="description"
          content="Help MedGuard track and eliminate fake drugs by submitting a report on suspicious medicines."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-4 text-center">
          Report a Suspicious Drug
        </h1>
        <p className="text-md sm:text-lg text-gray-600 mb-8 text-center">
          Help us identify and stop counterfeit or harmful drugs. Your report could save lives.
        </p>

        <form
          onSubmit={handleSubmit}
<<<<<<<<< Temporary merge branch 1
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg space-y-6 border border-gray-100"
=========
          className="bg-gray-white p-6 rounded-xl shadow-md space-y-6 border border-gray-100 text-primary-dark  [&__label]:text-md [&__label]:font-semibold"
>>>>>>>>> Temporary merge branch 2
        >
          {/* Drug Name */}
          <div>
<<<<<<<<< Temporary merge branch 1
            <label htmlFor="drugName" className="block text-sm font-semibold text-gray-700 mb-1">
              Drug Name <span className="text-red-500">*</span>
=========
            <label
              className="flex items-center gap-2 text-md font-medium mb-1"
              htmlFor="drugName"
            >
              <Pill className="h-5" />
              Drug Name
>>>>>>>>> Temporary merge branch 2
            </label>
            <input
              id="drugName"
              name="drugName"
              type="text"
              value={formData.drugName}
              onChange={handleChange}
              required
<<<<<<<<< Temporary merge branch 1
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark transition"
              placeholder="e.g., Amoxicillin 500mg"
=========
              className="w-full px-4 py-2  shadow-md rounded-md focus:outline-primary-dark focus:ring-2 focus:ring-primary"
              placeholder="e.g., Amoxillin 500mg"
>>>>>>>>> Temporary merge branch 2
            />
          </div>

          {/* Location */}
          <div>
<<<<<<<<< Temporary merge branch 1
            <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-1">
              Location Found <span className="text-red-500">*</span>
=========
            <label
              className="flex items-center gap-2 text-sm font-medium mb-1"
              htmlFor="location"
            >
              <MapPin className="h-5" />
              Location Found
>>>>>>>>> Temporary merge branch 2
            </label>
            <input
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              required
<<<<<<<<< Temporary merge branch 1
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark transition"
=========
              className="w-full shadow-md px-4 py-2 rounded-md focus:outline-primary-dark focus:ring-2 focus:ring-primary"
>>>>>>>>> Temporary merge branch 2
              placeholder="e.g., Alaba Market, Lagos"
            />
          </div>

          {/* Description */}
          <div>
<<<<<<<<< Temporary merge branch 1
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-1">
              Description or Effects Noticed <span className="text-red-500">*</span>
=========
            <label
              className="flex items-center gap-2 text-sm font-medium mb-1"
              htmlFor="description"
            >
              <PenLine className="h-5" />
              Description or Effects Noticed
>>>>>>>>> Temporary merge branch 2
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
<<<<<<<<< Temporary merge branch 1
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark transition resize-none"
=========
              className="w-full px-4 py-2 shadow-md rounded-md focus:outline-primary-dark focus:ring-2 focus:ring-primary"
>>>>>>>>> Temporary merge branch 2
              placeholder="Describe packaging, side effects, or anything unusual..."
            />
          </div>

          {/* Photo */}
          <div>
<<<<<<<<< Temporary merge branch 1
            <label htmlFor="photo" className="block text-sm font-semibold text-gray-700 mb-1">
=========
            <label
              className="flex items-center gap-2 text-md font-medium mb-1"
              htmlFor="photo"
            >
              <Camera className="h-5" />
>>>>>>>>> Temporary merge branch 2
              Upload Photo (optional)
            </label>
            <input
              id="photo"
              name="photo"
              type="file"
              accept="image/*"
              onChange={handleChange}
<<<<<<<<< Temporary merge branch 1
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:rounded-lg file:text-sm file:font-semibold file:bg-primary-dark file:text-white hover:file:bg-primary transition"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-900 transition shadow-lg hover:shadow-xl active:scale-95"
            >
              Submit Report
            </button>
          </div>
=========
              className="shadow-md p-2 max-w-xs rounded-md file:border-primary-dark  block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:rounded-md file:text-sm file:bg-primary file:text-white file:bg-primary-dark hover:file:bg-blue-800"
            />
          </div>

          <button
            type="submit"
            className="bg-primary-dark  text-primary px-6 py-3 rounded-lg hover:bg-blue-800 transition shadow text-white"
          >
            Submit Report
          </button>
>>>>>>>>> Temporary merge branch 2
        </form>
      </div>
    </div>
  );
};

export default ReportMails;