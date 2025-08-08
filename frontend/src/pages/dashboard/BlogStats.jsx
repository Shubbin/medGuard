// import { PlusCircle } from "lucide-react";
// import MetricsCard from "../../components/dashboardComponets/Analytics/MetricsCard";
// const BlogStats = () => {
//   return (
//     <div>
//       <div className="grid grid-cols-1 gap-4 m-6 md:grid-cols-2">
//         <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-all hover:scale-[1.025] hover:shadow-xl duration-200">
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center gap-3">
//               <p className="text-3xl font-bold text-gray-700 dark:text-gray-200">
//                 Total Blogs
//               </p>
//             </div>
//           </div>
//           <h3 className="mb-1 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
//             14
//           </h3>
//         </div>
//         <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-all hover:scale-[1.025] hover:shadow-xl duration-200">
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center gap-3">
//               <p className="text-3xl font-bold text-gray-700 dark:text-gray-200">
//                 Create New Blog
//               </p>
//             </div>
//           </div>
//           <button className="flex items-center gap-2 p-2 text-xl font-extrabold text-white rounded-md bg-secondary-dark ">
//             Create Blog <PlusCircle />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogStats;


import { PlusCircle } from "lucide-react";

const StatCard = ({ title, value, children }) => (
  <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-all hover:scale-[1.025] hover:shadow-xl duration-200">
    <div className="flex items-center justify-between mb-4">
      <p className="text-3xl font-bold text-gray-700 dark:text-gray-200">
        {title}
      </p>
    </div>
    {value !== undefined ? (
      <h3 className="mb-1 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {value}
      </h3>
    ) : (
      children
    )}
  </div>
);

const BlogStats = () => {
  return (
    <div className="grid grid-cols-1 gap-4 m-6 md:grid-cols-2">
      <StatCard title="Total Blogs" value="14" />
      <StatCard title="Create New Blog">
        <button
          aria-label="Create new blog"
          className="flex items-center gap-2 p-2 text-xl font-extrabold text-white rounded-md bg-secondary-dark"
        >
          Create Blog <PlusCircle />
        </button>
      </StatCard>
    </div>
  );
};

export default BlogStats;
