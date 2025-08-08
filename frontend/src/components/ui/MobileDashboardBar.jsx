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
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/Medguard Logo.png";
import avatar from "../../assets/images/avatar.svg";
// import AdminDropdown from "./AdminDropdown";
const MobileDashboardBar = () => {
  const navItems = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Report Mails", icon: Mail, path: "/dashboard/report-mails" },
    // { name: "Analytics", icon: PieChart, path: "/dashboard/analytics" },
    // { name: "Users", icon: Users, path: "/dashboard/users" },
    // { name: "Settings", icon: Cog, path: "/dashboard/settings" },
    { name: "Blogs", icon: FileText, path: "/dashboard/Blogs" },
    { name: "User Roles", icon: FileText, path: "/dashboard/roles" },
    { name: "Logout", icon: LogOut },
  ];
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  function toggleVisibility() {
    setDropdownVisibility(!dropdownVisibility);
  }
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between px-4 py-2 xl:ml-52 xl:h-24 bg-secondary-dark">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src={logo} className="h-24 xl:hidden" alt="MedGuard Logo" />
          </Link>
          <h1 className="text-lg font-bold text-white md:text-4xl">
            Welcome Back
          </h1>
        </div>
        <div className="flex items-center gap-4">
          {/* <Moon className="text-white" /> */}
          <img
            src={avatar}
            className="w-8 h-8 border border-white rounded-full cursor-pointer bg-secondary-dark"
            alt="User Avatar"
            onClick={toggleVisibility}
          />
        </div>
      </div>
      <div className="flex justify-around w-full py-2 bg-white border-t border-gray-200 xl:hidden">
        {navItems.map(({ name, icon: Icon, path }) => (
          <Link
            key={name}
            to={path}
            className={`flex flex-col items-center text-xs  p-2 rounded-md hover:text-primary ${isActive(path) ? "text-white bg-secondary-dark" : "bg-white text-primary-dark"}`}
          >
            <Icon
              className={`h-7 w-7  rounded-md p-1 ${isActive(path) ? "bg-white text-secondary-dark" : " bg-secondary-dark text-white"}`}
            />
            <span>{name}</span>
          </Link>
        ))}
      </div>
      {/* <AdminDropdown
        dropdownVisibility={dropdownVisibility}
        setDropdownVisibility={setDropdownVisibility}
        links={[
          { label: "View Profile", icon: User },
          { label: "Account Settings", icon: Cog },
          { label: "Send Feedback", icon: Heart },
          { label: "Contact Support", icon: MessageSquare },
          { label: "Logout", icon: LogOut },
        ]}
      /> */}
    </div>
  );
};

export default MobileDashboardBar;
