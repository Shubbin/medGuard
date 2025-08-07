import { PieChart } from "lucide-react";

const MetricsCard = ({ title, value }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-all hover:scale-[1.025] hover:shadow-xl duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-500/10 dark:bg-blue-400/10 rounded-lg p-2 flex items-center justify-center">
            <PieChart className="text-blue-500 dark:text-blue-400" size={32} />
          </div>
          <p className="text-base font-medium text-gray-700 dark:text-gray-200">
            {title}
          </p>
        </div>
        {/* <select
          className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md px-2 py-1 outline-none border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-300"
          defaultValue="7"
        >
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
        </select> */}
      </div>
      <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-1">
        {value}
      </h3>
    </div>
  );
};

export default MetricsCard;
