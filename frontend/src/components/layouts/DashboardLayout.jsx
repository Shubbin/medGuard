import { Outlet } from "react-router-dom";
import MobileDashboardBar from "../ui/MobileDashboardBar";
import Sidebar from "@components/ui/sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <MobileDashboardBar />
      <div className="flex">
        <Sidebar />
        <main className="xl:ml-44 flex-1 min-h-screen p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
