const AnalyticsHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold">Analytics Dashboard</h2>
      <select className="border rounded-md px-3 py-2 text-sm">
        <option>Last 7 Days</option>
        <option>Last 30 Days</option>
        <option>This Year</option>
      </select>
    </div>
  );
};

export default AnalyticsHeader;
