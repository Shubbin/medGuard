// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import footerLogo from "@/assets/images/Medguard Logo Two.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-dark text-white mt-16 pt-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-20 lg:gap-72">
          <div className="flex justify-center md:justify-start mb-4 md:mb-0">
            <img src={footerLogo} className="h-20 md:h-24 rounded-md" alt="" />
          </div>
          {/* Navigation */}
          <nav className="w-full md:w-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 text-sm font-medium">
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
        </div>

        {/* Socials */}
        <div
          className="flex flex-wrap justify-center space-x-6 mt-6"
          aria-label="Social media links"
        >
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-6 h-6 hover:text-primary transition" />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-6 h-6 hover:text-primary transition" />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6 hover:text-primary transition" />
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 hover:text-primary transition" />
          </a>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-600 pt-4 text-sm text-gray-300 bg-primary-dark py-4">
        <p>
          &copy; {currentYear} <span className="font-semibold">MedGuard</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;