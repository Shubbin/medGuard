const Dashboard = () => {
  const stats = [
    { label: "Total Reports", value: 120, color: "bg-blue-600" },
    { label: "Pending Reports", value: 35, color: "bg-yellow-500" },
    { label: "Resolved Reports", value: 80, color: "bg-green-600" },
    { label: "Total Users", value: 200, color: "bg-purple-600" },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl p-6 ${stat.color} text-white shadow-xl transition-all duration-300 transform hover:scale-105`}
          >
            <div className="text-sm font-medium">{stat.label}</div>
            <div className="text-3xl font-bold mt-2">{stat.value}</div>

            {/* Decorative glow background */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white opacity-10 rounded-full blur-2xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
