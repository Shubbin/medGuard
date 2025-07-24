
const MetricsCard = ({ title, value }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
      <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{value}</h3>
    </div>
  );
};

export default MetricsCard;
