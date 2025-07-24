import { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";

// Components
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import FloatingShape from "./components/FloatingShape";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSpinner from "./components/LoadingSpinner";

// Layouts
import DashboardLayout from "./components/layouts/DashboardLayout";

// Public Pages
import Home from "./pages/home/Home";
import About from "./pages/About";
import Report from "./pages/Report";
import VerifyDrug from "./pages/VerifyDrug";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";

// Dashboard Pages
import Overview from "./pages/dashboard/Overview";
import Verifications from "./pages/dashboard/Verifications";
import ReportMails from "./pages/dashboard/reportMails";
import Analytics from "./pages/dashboard/Analytics";
import Users from "./pages/dashboard/Users";
import Roles from "./pages/dashboard/Roles";
import Blogs from "./pages/dashboard/Blogs";
import Settings from "./pages/dashboard/Settings";

// Documents
import TermsAndConditions from "./document/TermsAndConditions";
import PrivacyPolicy from "./document/PrivacyPolicy";

<<<<<<< HEAD
// ✅ Redirect wrapper
=======
// Loader
import LoadingSpinner from "./components/LoadingSpinner";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";

// ✅ Protected Route Component
// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated, user } = useAuthStore();
//   if (!isAuthenticated) return <Navigate to="/login" replace />;
//   if (!user?.isVerified) return <Navigate to="/verify-email" replace />;
//   return children;
// };

// ✅ Redirect Authenticated Users
>>>>>>> 53969141104cea62380aca306f9e80e9d816a024
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (isAuthenticated && user?.isVerified) return <Navigate to="/" replace />;
  return children;
};

<<<<<<< HEAD
=======
function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-br from-background via-secondary to-background-light">
      <ScrollToTop />

      {/* Floating Shapes */}
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

      <Navbar />

      {/* Page Transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <PageWrapper>
                {/* <ProtectedRoute> */}
                <Home />
                {/* </ProtectedRoute> */}
              </PageWrapper>
            }
          />

          <Route
            path="/dashboard"
            element={
              <PageWrapper>
                {/* <ProtectedRoute> */}
                <DashboardPage />
                {/* </ProtectedRoute> */}
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                {/* <ProtectedRoute> */}
                <About />
                {/* </ProtectedRoute> */}
              </PageWrapper>
            }
          />
          <Route
            path="/blog"
            element={
              <PageWrapper>
                {/* <ProtectedRoute> */}
                <Blog />
                {/* </ProtectedRoute> */}
              </PageWrapper>
            }
          />
          <Route
            path="/report"
            element={
              <PageWrapper>
                {/* <ProtectedRoute> */}
                <Report />
                {/* </ProtectedRoute> */}
              </PageWrapper>
            }
          />
          <Route
            path="/verify"
            element={
              <PageWrapper>
                {/* <ProtectedRoute> */}
                <VerifyDrug />
                {/* </ProtectedRoute> */}
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

          {/* Public Documents */}
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
          <Route path="*" element={<NotFound />} />
          {/* Catch-All */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <Toaster />
    </div>
  );
}

>>>>>>> 53969141104cea62380aca306f9e80e9d816a024
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
    <div className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-br from-background via-secondary to-background-light">
      <ScrollToTop />

      {/* Floating Effects */}
      <FloatingShape color="bg-primary" size="w-64 h-64" top="-5%" left="10%" delay={0} />
      <FloatingShape color="bg-primary-dark" size="w-48 h-48" top="70%" left="80%" delay={5} />
      <FloatingShape color="bg-secondary" size="w-32 h-32" top="40%" left="-10%" delay={2} />

      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          {/* Public Pages */}
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/report" element={<PageWrapper><Report /></PageWrapper>} />
          <Route path="/verify" element={<PageWrapper><VerifyDrug /></PageWrapper>} />

          {/* Auth Routes */}
          <Route path="/signup" element={<PageWrapper><RedirectAuthenticatedUser><SignUpPage /></RedirectAuthenticatedUser></PageWrapper>} />
          <Route path="/login" element={<PageWrapper><RedirectAuthenticatedUser><LoginPage /></RedirectAuthenticatedUser></PageWrapper>} />
          <Route path="/verify-email" element={<PageWrapper><EmailVerificationPage /></PageWrapper>} />
          <Route path="/forgot-password" element={<PageWrapper><RedirectAuthenticatedUser><ForgotPasswordPage /></RedirectAuthenticatedUser></PageWrapper>} />
          <Route path="/reset-password/:token" element={<PageWrapper><RedirectAuthenticatedUser><ResetPasswordPage /></RedirectAuthenticatedUser></PageWrapper>} />

          {/* Documents */}
          <Route path="/terms" element={<PageWrapper><TermsAndConditions /></PageWrapper>} />
          <Route path="/privacy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="verifications" element={<Verifications />} />
            <Route path="report-mails" element={<ReportMails />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="users" element={<Users />} />
            <Route path="Blogs" element={<Blogs />} />
            <Route path="roles" element={<Roles />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* 404 Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>

      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
