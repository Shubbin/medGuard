import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import {
  Menu,
  X,
  Home,
  User,
  AlertTriangle,
  LayoutDashboard,
  CheckCircle,
  Book,
} from "lucide-react";
import navbarLogo from "@/assets/images/Medguard Logo Two.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { to: "/", label: "Home", icon: <Home /> },
    { to: "/about", label: "About", icon: <User /> },
    { to: "/blog", label: "Blog", icon: <Book /> },
    { to: "/report", label: "Report", icon: <AlertTriangle /> },
    { to: "/verify", label: "Verify Drug", icon: <CheckCircle /> },
    { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full py-2 bg-secondary-dark shadow-md backdrop-blur-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold transition duration-200 text-primary hover:text-secondary"
          >
            <img
              src={navbarLogo}
              className="h-20 rounded-xl shadow-md shadow-white"
              alt="MedGuard Logo"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden space-x-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`font-bold transition duration-200 p-2 rounded-md flex gap-2 items-end ${
                  isActive(item.to)
                    ? "text-primary font-semibold bg-white text-primary-dark"
                    : "text-white hover:bg-white hover:text-primary-dark"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="font-semibold text-red-600 hover:underline"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              className="p-2 transition rounded-full focus:outline-none hover:bg-blue-100 text-white hover:text-black"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-secondary-dark">
          <div className="flex flex-col px-4 pt-4 space-y-2">
            {navItems.map((navItem) => (
              <Link
                key={navItem.to}
                to={navItem.to}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 p-3 rounded-md ${
                  isActive(navItem.to)
                    ? "bg-white text-primary-dark"
                    : "text-white hover:bg-gray-100 hover:text-primary-dark"
                }`}
              >
                {navItem.icon}
                {navItem.label}
              </Link>
            ))}
            {isAuthenticated && (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="text-left font-semibold text-red-600 hover:underline mt-2"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
