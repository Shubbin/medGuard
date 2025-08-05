import sidebarLogo from "@/assets/images/Medguard Logo Two.png";
import {
  Menu,
  Mail,
  LayoutDashboard,
  Users,
  FileText,
  LogOut,
  Cog,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { useState } from "react";

const navItems = [
  { name: "Overview", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Report Mails", icon: Mail, path: "/dashboard/report-mails" },
  { name: "Users", icon: Users, path: "/dashboard/users" },
  { name: "Settings", icon: Cog, path: "/dashboard/settings" },
  { name: "Roles", icon: FileText, path: "/dashboard/roles" },
  { name: "Logout", icon: LogOut, path: "" },
];

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <div className="fixed z-50 md:hidden top-4 left-4">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-white bg-blue-900 rounded-md"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed top-0 left-0 h-full hidden xl:block md:w-52 bg-secondary-dark text-white shadow-2xl px-6 py-8 z-40 transform transition-transform duration-300 ease-in-out"
        )}
      >
        <div className="mb-4 text-2xl font-bold tracking-wide mx-auto">
          <img
            src={sidebarLogo}
            className="overflow overflow-y-auto w-32"
            alt={"Medguard Logo"}
          />
        </div>
        <nav className="space-y-4">
          {navItems.map(({ name, icon: Icon, path }) => (
            <Link
              to={path}
              key={name}
              onClick={() => setOpen(false)} // close on link click (mobile)
              className={clsx(
                "flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300",
                location.pathname === path
                  ? "bg-white/10 text-white font-semibold"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
