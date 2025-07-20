// src/pages/dashboard/ReportMails.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { MailIcon } from "lucide-react";
import ReportMailList from "../../components/dashboardComponets/Reportmails/ReportMailList";

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
    <div className="p-6 bg-white rounded-xl shadow-md dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-800 dark:text-gray-100">
        <MailIcon className="w-6 h-6 text-blue-500" />
        Report Mails
      </h1>

      <ReportMailList reports={reports} />
    </div>
  );
};

export default ReportMails;
