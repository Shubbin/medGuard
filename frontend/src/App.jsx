import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";

// Components
import FloatingShape from "./components/FloatingShape";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSpinner from "./components/LoadingSpinner";

// Layouts
import DashboardLayout from "./components/layouts/DashboardLayout";
import AppLayout from "./components/layouts/AppLayout";
// Public Pages
import Home from "./pages/home/Home";
import About from "./pages/About/About";
import Report from "./pages/Report";
import Blog from "./pages/Blog";
import VerifyDrug from "./pages/VerifyDrug";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";

// Dashboard Pages
import Verifications from "./pages/dashboard/Verifications";
import ReportMails from "./pages/dashboard/reportMails";
import Analytics from "./pages/dashboard/Analytics";
import Users from "./pages/dashboard/Users";
import Roles from "./pages/dashboard/Roles";
import Settings from "./pages/dashboard/Settings";

// Documents
import TermsAndConditions from "./document/TermsAndConditions";
import PrivacyPolicy from "./document/policy";
import MedIntel from "./components/bot/MedIntel";

// ✅ Redirect wrapper
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (isAuthenticated && user?.isVerified) return <Navigate to="/" replace />;
  return children;
};

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

const App = () => {
  const { isCheckingAuth, checkAuth } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-secondary to-background-light">
      <ScrollToTop />
      {/* Floating Effects */}
      <FloatingShape
        color="bg-primary"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-primary-dark"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        color="bg-secondary"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<AppLayout />}>
            {/* Public Pages */}
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
            />
            <Route
              path="/blog"
              element={
                <PageWrapper>
                  <Blog />
                </PageWrapper>
              }
            />
            <Route
              path="/report"
              element={
                <PageWrapper>
                  <Report />
                </PageWrapper>
              }
            />
            <Route
              path="/verify"
              element={
                <PageWrapper>
                  <VerifyDrug />
                </PageWrapper>
              }
            />

            {/* Auth Routes */}
            <Route
              path="/signup"
              element={
                <PageWrapper>
                  <RedirectAuthenticatedUser>
                    <SignUpPage />
                  </RedirectAuthenticatedUser>
                </PageWrapper>
              }
            />
            <Route
              path="/login"
              element={
                <PageWrapper>
                  <RedirectAuthenticatedUser>
                    <LoginPage />
                  </RedirectAuthenticatedUser>
                </PageWrapper>
              }
            />
            <Route
              path="/verify-email"
              element={
                <PageWrapper>
                  <EmailVerificationPage />
                </PageWrapper>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <PageWrapper>
                  <RedirectAuthenticatedUser>
                    <ForgotPasswordPage />
                  </RedirectAuthenticatedUser>
                </PageWrapper>
              }
            />
            <Route
              path="/reset-password/:token"
              element={
                <PageWrapper>
                  <RedirectAuthenticatedUser>
                    <ResetPasswordPage />
                  </RedirectAuthenticatedUser>
                </PageWrapper>
              }
            />

            {/* Documents */}
            <Route
              path="/terms"
              element={
                <PageWrapper>
                  <TermsAndConditions />
                </PageWrapper>
              }
            />
            <Route
              path="/privacy"
              element={
                <PageWrapper>
                  <PrivacyPolicy />
                </PageWrapper>
              }
            />
          </Route>
          {/* Dashboard */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Analytics />} />
            <Route path="verifications" element={<Verifications />} />
            <Route path="report-mails" element={<ReportMails />} />
            <Route path="dashboard" element={<Analytics />} />
            <Route path="users" element={<Users />} />
            <Route path="roles" element={<Roles />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* 404 Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
      <Toaster />
      <MedIntel />
    </div>
  );
};

export default App;
