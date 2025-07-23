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
    { to: "/report", label: "Report", icon: <AlertTriangle /> },
    { to: "/verify", label: "Verify Drug", icon: <CheckCircle /> },
    { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full py-2 bg-white shadow-md backdrop-blur-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold transition duration-200 text-primary hover:text-secondary"
          >
            <img src={navbarLogo} className="h-16 rounded-xl" alt="MedGuard Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden space-x-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.to} 
                to={item.to}
                className={`font-bold transition duration-200 p-2 rounded-md flex gap-2 items-end ${
                  isActive(item.to)
                    ? "text-primary font-semibold bg-secondary-dark text-white"
                    : "text-black hover:bg-secondary-dark hover:text-white"
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
          <div className="md:hidden ">
            <button
              className="p-2 transition rounded-full focus:outline-none hover:bg-blue-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-2 px-4 pb-4 bg-white shadow-lg md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.to} 
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={`block font-medium ${
                isActive(item.to)
                  ? "text-primary underline underline-offset-4"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          {isAuthenticated && (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="block font-semibold text-red-600 hover:underline"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
