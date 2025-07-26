import { Outlet } from "react-router-dom";
import MobileDashboardBar from "../ui/MobileDashboardBar";

const DashboardLayout = () => {
  return (
    <div>
      <MobileDashboardBar />
      <div className="flex">
        <main className="flex-1 min-h-screen bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
