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
  CircleCheck,
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
    { to: "/verify", label: "Verify Drug", icon: <CircleCheck /> },
    { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md backdrop-blur-lg py-2">
      <div className=" px-4 mx-auto max-w-7xl sm:px-4 lg:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold transition duration-200 text-primary hover:text-secondary"
          >
            <img src={navbarLogo} className="h-14" alt="" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden space-x-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`font-bold transition duration-200  p-2  rounded-md flex gap-2 items-end  ${
                  isActive(item.to)
                    ? "text-primary font-semibold bg-secondary-dark text-white"
                    : "text-black hover:bg-secondary-dark hover:text-white "
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
          <div className="lg:hidden ">
            <button
              className="focus:outline-none rounded-full p-2 hover:bg-blue-100 transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col px-4 pt-4 pb-4 space-y-4 bg-white lg:hidden">
          {navItems.map((navItem) => (
            <Link
              key={navItem.label}
              to={navItem.to}
              onClick={() => setIsOpen(false)}
              className={`flex gap-2 items-center font-medium p-4 rounded-md ${
                isActive(navItem.to)
                  ? "bg-primary-dark text-white"
                  : "text-gray-700 hover:text-primary"
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
