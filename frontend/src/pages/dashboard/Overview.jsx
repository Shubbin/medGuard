import { useEffect, useState } from "react";
import {
  BarChart2Icon,
  UsersIcon,
  FileTextIcon,
  ShieldCheckIcon,
  AlertTriangleIcon,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "../../components/ui/card";

const Overview = () => {
  const [adminName, setAdminName] = useState("Admin");

  useEffect(() => {
    // Replace this with your actual user context or auth
    setAdminName("Shubbin");
  }, []);

  const stats = [
    {
      icon: <UsersIcon className="text-blue-500 w-6 h-6" />,
      title: "Total Users",
      value: "1,245",
      link: "#",
    },
    {
      icon: <FileTextIcon className="text-green-500 w-6 h-6" />,
      title: "Reports Filed",
      value: "582",
      link: "#",
    },
    {
      icon: <ShieldCheckIcon className="text-purple-500 w-6 h-6" />,
      title: "Verifications",
      value: "312",
      link: "#",
    },
    {
      icon: <AlertTriangleIcon className="text-red-500 w-6 h-6" />,
      title: "System Alerts",
      value: "7",
      link: "#",
    },
  ];

  return (
    <>
      <section className="p-4 sm:p-6 md:p-10 space-y-6">
        <div className="flex flex-wrap items-center gap-4">
          <BarChart2Icon className="w-6 sm:w-7 h-6 sm:h-7 text-green-600" />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            System Overview
          </h1>
        </div>
    <section className="p-4 sm:p-6 md:p-10 space-y-10 bg-background-light min-h-screen">
      {/* Welcome Banner */}
      <div className="bg-white rounded-2xl shadow-md px-6 py-6 sm:py-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          Welcome back,{" "}
          <span className="text-primary-dark">{adminName}</span> 👋
        </h1>
        <p className="mt-2 text-gray-600 text-base md:text-lg">
          Here’s what’s happening in your system today.
        </p>
      </div>

      {/* System Overview Title */}
      <div className="flex items-center gap-3">
        <BarChart2Icon className="w-7 h-7 text-primary-dark" />
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          System Overview
        </h2>
      </div>

        <Card className="shadow-md rounded-2xl w-full">
          <CardContent className="p-4 sm:p-6 text-gray-700">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              This dashboard provides a high-level summary of system activities,
              including user registrations, reports filed, verification logs,
              and system alerts.
            </p>
          </CardContent>
        </Card>
      </section>
    </>
      {/* Description Panel */}
      <Card className="bg-white rounded-2xl shadow-md border border-muted">
        <CardContent className="p-6 md:p-8 text-gray-700">
          <p className="text-base md:text-lg leading-relaxed">
            This dashboard provides a high-level summary of platform activity —
            including user sign-ups, reports submitted, verification audits, and
            alerts. Stay informed and take swift action when necessary.
          </p>
        </CardContent>
      </Card>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="bg-white hover:shadow-xl shadow-md border border-muted rounded-2xl transition-all duration-300"
          >
            <CardHeader className="flex items-center gap-4 pb-0">
              <div className="flex-shrink-0">{stat.icon}</div>
              <CardTitle className="text-sm font-medium text-gray-500">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2 pb-4 px-6">
              <div className="text-3xl font-bold text-gray-800">
                {stat.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Overview;