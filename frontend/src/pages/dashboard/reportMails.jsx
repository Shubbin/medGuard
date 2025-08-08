// src/pages/dashboard/ReportMails.jsx

import { useEffect, useState } from "react";
import axios from "axios";
import { MailIcon, Search, Loader } from "lucide-react";
import ReportMailList from "../../components/dashboardComponets/Reportmails/ReportMailList";

const ReportMails = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchReports = async () => {
      setLoading(true);
      try {
        const endpoint = searchQuery
          ? `http://localhost:8000/api/reports/search?query=${searchQuery}`
          : `http://localhost:8000/api/reports`;

        const res = await axios.get(endpoint);
        setReports(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Failed to fetch reports:", err);
        setReports([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [searchQuery]);

  return (
    <div className="xl:ml-6 m-4 md:m-0 p-6 bg-white rounded-xl shadow-md dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-800 dark:text-gray-100">
        <MailIcon className="w-6 h-6 text-blue-500" />
        Report Mails
      </h1>

      <div className="mb-4 flex items-center gap-2">
        <input
          type="text"
          placeholder="Search by drug name or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
        />
        <Search className="w-5 h-5 text-gray-500" />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-60">
          <Loader className="animate-spin w-6 h-6 text-gray-600" />
          <span className="ml-2 text-gray-600">Loading report mails...</span>
        </div>
      ) : (
        <ReportMailList reports={reports} />
      )}
    </div>
  );
};

export default ReportMails;
