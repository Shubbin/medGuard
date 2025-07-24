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
<<<<<<< HEAD
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
=======
        <nav className="flex flex-col md:flex-row justify-between items-center gap-4">
          <ul className="flex flex-wrap justify-center space-x-6 text-sm font-medium">
            <li>
              <Link to="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-primary transition">
                Privacy and Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-primary transition">
                Terms and conditions
              </Link>
            </li>
          </ul>
        </nav>

        {/* Socials */}
        <div
          className="flex justify-center space-x-6 mt-6"
          aria-label="Social media links"
        >
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-5 h-5 hover:text-primary transition" />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-5 h-5 hover:text-primary transition" />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-5 h-5 hover:text-primary transition" />
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
>>>>>>> 53969141104cea62380aca306f9e80e9d816a024
            <Linkedin className="w-5 h-5 hover:text-primary transition" />
          </a>
        </div>

        {/* Copyright */}
<<<<<<< HEAD
        <div className="text-xs text-gray-400 pt-4 border-t border-gray-600">
          &copy; {currentYear} <span className="font-semibold">MedGuard</span>. All rights reserved.
=======
        <div className="text-center mt-8 border-t border-gray-600 pt-4 text-sm text-gray-300">
          <p>
            &copy; {currentYear} <span className="font-semibold">MedGuard</span>
            . All rights reserved.
          </p>
>>>>>>> 53969141104cea62380aca306f9e80e9d816a024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
