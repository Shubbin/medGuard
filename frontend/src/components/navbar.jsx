import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { Menu, X } from "lucide-react";

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

  return (
    <nav className="bg-white/80 backdrop-blur-lg shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary hover:text-secondary transition duration-200">
            MedGuard
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/report", label: "Report" },
              { to: "/verify", label: "Verify Drug" },
              { to: "/dashboard", label: "Dashboard" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`font-medium transition duration-200 ${
                  isActive(to)
                    ? "text-primary underline underline-offset-4 font-semibold"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {label}
              </Link>
            ))}
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="text-red-600 font-semibold hover:underline"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4 space-y-2">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/report", label: "Report" },
            { to: "/verify", label: "Verify Drug" },
            { to: "/dashboard", label: "Dashboard" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={`block font-medium ${
                isActive(to)
                  ? "text-primary underline underline-offset-4"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              {label}
            </Link>
          ))}
          {isAuthenticated && (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="block text-red-600 font-semibold hover:underline"
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
