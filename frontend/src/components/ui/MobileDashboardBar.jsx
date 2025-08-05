import {
  Home,
  Mail,
  PieChart,
  Users,
  FileText,
  LogOut,
  Cog,
  Moon,
  User,
  Heart,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Medguard Logo.png";
import avatar from "../../assets/images/avatar.svg";
import AdminDropdown from "./AdminDropdown";
const MobileDashboardBar = () => {
  const navItems = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Report Mails", icon: Mail, path: "/dashboard/report-mails" },
    { name: "Analytics", icon: PieChart, path: "/dashboard/analytics" },
    { name: "Users", icon: Users, path: "/dashboard/users" },
    { name: "Settings", icon: Cog, path: "/dashboard/settings" },
    { name: "Roles", icon: FileText, path: "/dashboard/roles" },
  ];
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  function toggleVisibility() {
    setDropdownVisibility(!dropdownVisibility);
  }
  return (
    <div className="flex flex-col w-full">
      <div className="xl:ml-52 xl:h-24 flex items-center justify-between px-4 py-2 bg-secondary-dark">
        <div className="flex gap-4 items-center">
          <img src={logo} className="h-24 xl:hidden" alt="MedGuard Logo" />
          <h1 className="text-lg md:text-4xl font-bold text-white">
            Welcome Back, Mac
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Moon className="text-white" />
          <img
            src={avatar}
            className="h-8 w-8 bg-secondary-dark rounded-full border border-white cursor-pointer"
            alt="User Avatar"
            onClick={toggleVisibility}
          />
        </div>
      </div>
      <div className="xl:hidden w-full flex justify-around bg-white py-2 border-t border-gray-200">
        {navItems.map(({ name, icon: Icon, path }) => (
          <Link
            key={name}
            to={path}
            className="flex flex-col items-center text-xs text-gray-700 hover:text-primary"
          >
            <Icon className="h-7 w-7 mb-1 text-white rounded-md p-1 bg-secondary-dark" />
            <span>{name}</span>
          </Link>
        ))}
      </div>
      <AdminDropdown
        dropdownVisibility={dropdownVisibility}
        setDropdownVisibility={setDropdownVisibility}
        links={[
          { label: "View Profile", icon: User },
          { label: "Account Settings", icon: Cog },
          { label: "Send Feedback", icon: Heart },
          { label: "Contact Support", icon: MessageSquare },
          { label: "Logout", icon: LogOut },
        ]}
      />
    </div>
  );
};

export default MobileDashboardBar;
