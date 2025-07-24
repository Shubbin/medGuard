<<<<<<< HEAD
// src/components/ui/Sidebar.jsx
=======
// src/components/ui/sidebar.jsx
>>>>>>> 53969141104cea62380aca306f9e80e9d816a024
import {
  Home,
  Mail,
  PieChart,
  Users,
  FileText,
<<<<<<< HEAD
  Settings,
  ShieldCheck,
  Newspaper,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

// Define navigation config outside component
=======
  Menu,
  LogOut,
  Cog,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { useState } from "react";

>>>>>>> 53969141104cea62380aca306f9e80e9d816a024
const navItems = [
  { name: "Dashboard", icon: Home, path: "/dashboard" },
  { name: "Report Mails", icon: Mail, path: "/dashboard/report-mails" },
  { name: "Analytics", icon: PieChart, path: "/dashboard/analytics" },
  { name: "Users", icon: Users, path: "/dashboard/users" },
<<<<<<< HEAD
  { name: "Roles", icon: FileText, path: "/dashboard/roles" },
  { name: "Blogs", icon: Newspaper, path: "/dashboard/blogs" },
  { name: "Verifications", icon: ShieldCheck, path: "/dashboard/verifications" },
  { name: "Settings", icon: Settings, path: "/dashboard/settings" },
=======
  { name: "Settings", icon: Cog, path: "/dashboard/settings" },
  { name: "Roles", icon: FileText, path: "/dashboard/roles" },
  { name: "Logout", icon: LogOut, path: "" },
>>>>>>> 53969141104cea62380aca306f9e80e9d816a024
];

const Sidebar = () => {
  const location = useLocation();
<<<<<<< HEAD

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-950 to-slate-900 text-white shadow-2xl px-6 py-8 z-50">
      {/* Brand/Header */}
      <div className="text-2xl font-bold mb-10 tracking-wide uppercase">
        Admin Panel
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navItems.map(({ name, icon: Icon, path }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              to={path}
              key={name}
              className={clsx(
                "flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 text-sm",
                isActive
=======
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
          "fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-950 to-slate-900 text-white shadow-2xl px-6 py-8 z-40 transform transition-transform duration-300 ease-in-out",
          {
            "-translate-x-full": !open,
            "translate-x-0": open,
            "md:translate-x-0": true, // Always visible on md and above
          }
        )}
      >
        <div className="mb-10 text-2xl font-bold tracking-wide">
          Admin Panel
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
>>>>>>> 53969141104cea62380aca306f9e80e9d816a024
                  ? "bg-white/10 text-white font-semibold"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              )}
            >
<<<<<<< HEAD
              <Icon className="w-5 h-5 shrink-0" />
              <span>{name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
=======
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
>>>>>>> 53969141104cea62380aca306f9e80e9d816a024
