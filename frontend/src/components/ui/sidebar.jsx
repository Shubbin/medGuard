// src/components/ui/Sidebar.jsx
import {
  Home,
  Mail,
  PieChart,
  Users,
  FileText,
  Settings,
  ShieldCheck,
  Newspaper,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

// Define navigation config outside component
const navItems = [
  { name: "Dashboard", icon: Home, path: "/dashboard" },
  { name: "Report Mails", icon: Mail, path: "/dashboard/report-mails" },
  { name: "Analytics", icon: PieChart, path: "/dashboard/analytics" },
  { name: "Users", icon: Users, path: "/dashboard/users" },
  { name: "Roles", icon: FileText, path: "/dashboard/roles" },
  { name: "Blogs", icon: Newspaper, path: "/dashboard/blogs" },
  { name: "Verifications", icon: ShieldCheck, path: "/dashboard/verifications" },
  { name: "Settings", icon: Settings, path: "/dashboard/settings" },
];

const Sidebar = () => {
  const location = useLocation();

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
                  ? "bg-white/10 text-white font-semibold"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              )}
            >
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
