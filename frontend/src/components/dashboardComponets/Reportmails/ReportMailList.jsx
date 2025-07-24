import ReportMailCard from "../../dashboardComponets/Reportmails/MailReportCard"


const ReportMailList = ({ reports }) => {
  if (!Array.isArray(reports)) return null;

  if (reports.length === 0)
    return <p className="text-center text-gray-500 mt-10">No reports available yet.</p>;

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {reports.map((report) => (
        <ReportMailCard key={report._id} report={report} />
      ))}
    </div>
  );
};

export default ReportMailList;