import { PlusCircle } from "lucide-react";
import MetricsCard from "../../components/dashboardComponets/Analytics/MetricsCard";
const BlogStats = () => {
  return (
    <div>
      <div className="m-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-all hover:scale-[1.025] hover:shadow-xl duration-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <p className="text-3xl font-bold text-gray-700 dark:text-gray-200">
                Total Blogs
              </p>
            </div>
          </div>
          <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-1">
            14
          </h3>
        </div>
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-all hover:scale-[1.025] hover:shadow-xl duration-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <p className="text-3xl font-bold text-gray-700 dark:text-gray-200">
                Create New Blog
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-secondary-dark p-2 rounded-md text-xl font-extrabold text-white ">
            Create Blog <PlusCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogStats;
