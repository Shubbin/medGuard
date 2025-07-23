import AnalyticsHeader from "../../components/dashboardComponets/Analytics/AnalyticsHeader";
import MetricsCard from "../../components/dashboardComponets/Analytics/MetricsCard";
import AnalyticsChart from "../../components/dashboardComponets/Analytics/AnalyticsChart";
import PieChart from "../../components/dashboardComponets/Analytics/PieChart";
import BarChart from "../../components/dashboardComponets/Analytics/StackedBarChart";

const Analytics = () => {
  return (
    <div className="p-6 space-y-6">
      <AnalyticsHeader />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricsCard title="Total Verifications" value="1,245" />
        <MetricsCard title="Failed Checks" value="89" />
        <MetricsCard title="User Reports" value="312" />
        <MetricsCard title="Top Drugs Queried" value="Panadol Extra" />
      </div>
      {/* <div className="grid items-center grid-cols-2 gap-4"> */}
      <AnalyticsChart />
      <PieChart />
      <BarChart />
      {/* </div> */}
    </div>
  );
};

export default Analytics;
