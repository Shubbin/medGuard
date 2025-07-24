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

  const isDashboard = location.pathname.startsWith("/dashboard");
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  const navItems = [
<<<<<<< HEAD
    { to: "/", label: "Home", icon: <Home size={18} /> },
    { to: "/about", label: "About", icon: <User size={18} /> },
    { to: "/report", label: "Report", icon: <AlertTriangle size={18} /> },
    { to: "/verify", label: "Verify Drug", icon: <CircleCheck size={18} /> },
    { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-white shadow-md py-2 ${
        isDashboard ? "px-4" : ""
      }`}
    >
      <div
        className={`${
          isDashboard ? "w-full px-0" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        }`}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary hover:text-secondary">
            <img src={navbarLogo} className="h-14" alt="MedGuard Logo" />
=======
    { to: "/", label: "Home", icon: <Home /> },
    { to: "/about", label: "About", icon: <User /> },
    { to: "/blog", label: "Blog", icon: <Book /> },
    { to: "/report", label: "Report", icon: <AlertTriangle /> },
    { to: "/verify", label: "Verify Drug", icon: <CheckCircle /> },
    { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
  ];

  return (
<<<<<<< HEAD
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md backdrop-blur-lg py-2">
      <div className=" px-4 mx-auto max-w-7xl sm:px-4 lg:px-4">
=======
    <nav className="fixed top-0 z-50 w-full py-2 bg-white shadow-md backdrop-blur-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
>>>>>>> ea6d368 (feat: implement analytics chart using chart.js)
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold transition duration-200 text-primary hover:text-secondary"
          >
<<<<<<< HEAD
            <img src={navbarLogo} className="h-14" alt="" />
=======
            <img src={navbarLogo} className="h-16 rounded-xl" alt="MedGuard Logo" />
>>>>>>> ea6d368 (feat: implement analytics chart using chart.js)
>>>>>>> 53969141104cea62380aca306f9e80e9d816a024
          </Link>

          {/* Desktop Menu */}
          <div className="hidden space-x-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`font-bold transition duration-200 p-2 rounded-md flex gap-2 items-end ${
                  isActive(item.to)
                    ? "bg-secondary-dark text-white shadow-md scale-[1.03]"
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
<<<<<<< HEAD
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md bg-white shadow-sm border ${
                isOpen ? "ring-2 ring-primary" : ""
              }`}
=======
          <div className="lg:hidden ">
            <button
              className="p-2 transition rounded-full focus:outline-none hover:bg-blue-100"
              onClick={() => setIsOpen(!isOpen)}
>>>>>>> 53969141104cea62380aca306f9e80e9d816a024
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
<<<<<<< HEAD
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed top-0 right-0 z-50 h-full w-64 bg-white text-black shadow-lg p-6 space-y-4 transform transition-transform duration-300 ease-in-out md:hidden">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold text-primary">Menu</span>
              <button onClick={() => setIsOpen(false)}>
                <X size={24} className="text-black" />
              </button>
            </div>

            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 text-base font-medium p-2 rounded-md transition ${
                  isActive(item.to)
                    ? "bg-secondary-dark text-white shadow-sm scale-[1.02]"
                    : "hover:bg-gray-100 text-gray-800"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
            {isAuthenticated && (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="text-red-600 font-semibold hover:underline"
              >
                Logout
              </button>
            )}
          </div>
        </>
=======
<<<<<<< HEAD
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
=======
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
>>>>>>> ea6d368 (feat: implement analytics chart using chart.js)
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
>>>>>>> 53969141104cea62380aca306f9e80e9d816a024
      )}
    </nav>
  );
};

export default Navbar;
