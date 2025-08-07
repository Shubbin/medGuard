import { Card, CardContent } from "../../components/ui/card";
import { BarChart2Icon } from "lucide-react";

const Overview = () => {
  return (
    <>
      <section className="p-4 sm:p-6 md:p-10 space-y-6">
        <div className="flex flex-wrap items-center gap-4">
          <BarChart2Icon className="w-6 sm:w-7 h-6 sm:h-7 text-green-600" />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            System Overview
          </h1>
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
  );
};

export default Overview;