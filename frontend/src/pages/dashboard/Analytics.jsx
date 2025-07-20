import AnalyticsHeader from "../../components/dashboardComponets/Analytics/AnalyticsHeader";
import MetricsCard from "../../components/dashboardComponets/Analytics/MetricsCard";
import AnalyticsChart from "../../components/dashboardComponets/Analytics/AnalyticsChart";

const Analytics = () => {
  return (
    <div className="p-6 space-y-6">
      <AnalyticsHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricsCard title="Total Verifications" value="1,245" />
        <MetricsCard title="Failed Checks" value="89" />
        <MetricsCard title="User Reports" value="312" />
        <MetricsCard title="Top Drugs Queried" value="Panadol Extra" />
      </div>

      <AnalyticsChart />
    </div>
  );
};

export default Analytics;
