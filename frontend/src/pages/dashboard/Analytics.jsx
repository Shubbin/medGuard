import AnalyticsHeader from "../../components/dashboardComponets/Analytics/AnalyticsHeader";
import MetricsCard from "../../components/dashboardComponets/Analytics/MetricsCard";
import AnalyticsChart from "../../components/dashboardComponets/Analytics/AnalyticsChart";
import DoughnutChart from "../../components/dashboardComponets/Analytics/DoughnutChart";
import BarChart from "../../components/dashboardComponets/Analytics/StackedBarChart";

const Analytics = () => {
  return (
    <div className="p-6 space-y-6">
      <AnalyticsHeader />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <MetricsCard title="Total Verifications" value="1,245" />
        {/* <MetricsCard title="Failed Checks" value="89" /> */}
        <MetricsCard title="User Reports" value="312" />
        <MetricsCard title="Top Drugs Queried" value="Panadol Extra" />
      </div>
     <div className="p-10  rounded-md">

      <AnalyticsChart />
     </div>
           <div className="p-10  rounded-md">

      <DoughnutChart />
           </div>

      <div className="p-10  rounded-md">
        <BarChart />
      </div>
    </div>
  );
};

export default Analytics;