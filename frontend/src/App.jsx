import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";

// Components
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import FloatingShape from "./components/FloatingShape";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Report from "./pages/Report";
import VerifyDrug from "./pages/VerifyDrug";
import DashboardPage from "./pages/DashboardPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";

// Documents
import TermsAndConditions from "../src/document/TermsAndConditions";
import PrivacyPolicy from "../src/document/PrivacyPolicy";

// Loader
import LoadingSpinner from "./components/LoadingSpinner";

// ✅ Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!user?.isVerified) return <Navigate to="/verify-email" replace />;
  return children;
};

// ✅ Redirect Authenticated Users
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (isAuthenticated && user?.isVerified) return <Navigate to="/" replace />;
  return children;
};

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background-light pt-16 relative overflow-hidden">
      <ScrollToTop />

      {/* Floating Shapes */}
      <FloatingShape color="bg-primary" size="w-64 h-64" top="-5%" left="10%" delay={0} />
      <FloatingShape color="bg-primary-dark" size="w-48 h-48" top="70%" left="80%" delay={5} />
      <FloatingShape color="bg-secondary" size="w-32 h-32" top="40%" left="-10%" delay={2} />

      <Navbar />

      {/* Page Transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Protected Routes */}
          <Route path="/" element={<PageWrapper><ProtectedRoute><Home /></ProtectedRoute></PageWrapper>} />
          <Route path="/dashboard" element={<PageWrapper><ProtectedRoute><DashboardPage /></ProtectedRoute></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><ProtectedRoute><About /></ProtectedRoute></PageWrapper>} />
          <Route path="/report" element={<PageWrapper><ProtectedRoute><Report /></ProtectedRoute></PageWrapper>} />
          <Route path="/verify" element={<PageWrapper><ProtectedRoute><VerifyDrug /></ProtectedRoute></PageWrapper>} />

          {/* Auth Routes */}
          <Route path="/signup" element={<PageWrapper><RedirectAuthenticatedUser><SignUpPage /></RedirectAuthenticatedUser></PageWrapper>} />
          <Route path="/login" element={<PageWrapper><RedirectAuthenticatedUser><LoginPage /></RedirectAuthenticatedUser></PageWrapper>} />
          <Route path="/verify-email" element={<PageWrapper><EmailVerificationPage /></PageWrapper>} />
          <Route path="/forgot-password" element={<PageWrapper><RedirectAuthenticatedUser><ForgotPasswordPage /></RedirectAuthenticatedUser></PageWrapper>} />
          <Route path="/reset-password/:token" element={<PageWrapper><RedirectAuthenticatedUser><ResetPasswordPage /></RedirectAuthenticatedUser></PageWrapper>} />

          {/* Public Documents */}
          <Route path="/terms" element={<PageWrapper><TermsAndConditions /></PageWrapper>} />
          <Route path="/privacy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />

          {/* Catch-All */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>

      <Footer />
      <Toaster />
    </div>
  );
}

// ✅ Framer Motion Page Wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

export default App;
