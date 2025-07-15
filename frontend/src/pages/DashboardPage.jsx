import  { useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import {
  HomeIcon,
  BarChart2Icon,
  MailIcon,
  UsersIcon,
  SettingsIcon,
  LogOutIcon,
  ShieldIcon,
  ScanSearchIcon,
  CameraIcon,
  MicIcon,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Sidebar } from "../components/ui/sidebar";
import { Separator } from "../components/ui/separator";

const DashboardPage = () => {
  const { user, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState("Welcome Back");

  const handleLogout = () => {
    logout();
  };

  const navItems = [
    { name: "Overview", icon: HomeIcon, tab: "overview" },
    { name: "Drug Verification Logs", icon: ScanSearchIcon, tab: "verifications" },
    { name: "Image Reports", icon: CameraIcon, tab: "image-reports" },
    { name: "Voice Search Logs", icon: MicIcon, tab: "voice-logs" },
    { name: "Mail Reports", icon: MailIcon, tab: "mails" },
    { name: "Analytics", icon: BarChart2Icon, tab: "analytics" },
    { name: "Users", icon: UsersIcon, tab: "users" },
    { name: "Roles", icon: ShieldIcon, tab: "roles" },
    { name: "Settings", icon: SettingsIcon, tab: "settings" },
  ];

  return (
    <div className="flex min-h-screen bg-[#eaf6fb]">
      <Sidebar navItems={navItems} activeTab={activeTab} setActiveTab={setActiveTab} />

      <motion.main
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex-1 px-10 py-8 overflow-y-auto"
      >
        <h2 className="text-3xl font-bold text-[#4A8BBE] mb-6 capitalize">
          {activeTab.replace(/-/g, " ")}
        </h2>

        <Separator className="mb-6 bg-[#B7D3E3]" />

        {activeTab === "overview" && (
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-lg border border-[#4A8BBE]">
              <CardHeader>
                <CardTitle className="text-[#2563eb]">Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2 text-[#1f2937]">
                <p>Name: {user?.name}</p>
                <p>Email: {user?.email}</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border border-[#4A8BBE]">
              <CardHeader>
                <CardTitle className="text-[#2563eb]">Account Activity</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2 text-[#1f2937]">
                <p>
                  <span className="font-semibold">Joined:</span>{" "}
                  {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "-"}
                </p>
                <p>
                  <span className="font-semibold">Last Login:</span>{" "}
                  {user?.lastLogin ? new Date(user.lastLogin).toLocaleString() : "-"}
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab !== "overview" && (
          <Card className="shadow-lg border border-[#4A8BBE]">
            <CardHeader>
              <CardTitle className="capitalize text-[#2563eb]">
                {activeTab.replace(/-/g, " ")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#1f2937]">{activeTab} module coming soon...</p>
            </CardContent>
          </Card>
        )}

        {/* <div className="mt-10">
          <Button
            variant="destructive"
            onClick={handleLogout}
            className="w-full flex items-center gap-2 text-base bg-[#ef4444] hover:bg-[#dc2626]"
          >
            <LogOutIcon className="h-5 w-5" /> Logout
          </Button>
        </div> */}
      </motion.main>
    </div>
  );
};

export default DashboardPage;