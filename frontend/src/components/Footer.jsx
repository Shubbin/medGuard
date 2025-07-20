import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <footer
      className={`bg-primary-dark text-white py-10 ${
        isDashboard ? "mt-auto w-full" : "mt-20"
      }`}
    >
      <div
        className={`${
          isDashboard ? "px-6" : "max-w-7xl px-4 mx-auto"
        } space-y-8 text-center`}
      >
        {/* Navigation */}
        <nav className="flex flex-col items-center gap-4 text-sm font-medium md:flex-row md:justify-center">
          <ul className="flex flex-wrap justify-center gap-4">
            <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary transition">Terms</Link></li>
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="w-5 h-5 hover:text-primary transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="w-5 h-5 hover:text-primary transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-5 h-5 hover:text-primary transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 hover:text-primary transition" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400 pt-4 border-t border-gray-600">
          &copy; {currentYear} <span className="font-semibold">MedGuard</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
