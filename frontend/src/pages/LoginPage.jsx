import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import FloatingInput from "../components/FloatingInput";
import medGuardLogo from "../assets/images/Medguard Logo.png";
import { Helmet } from "react-helmet";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      await login(email.trim(), password);
    } catch (err) {
      console.error("Login failed:", err.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | MedGuard</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center w-full max-w-md min-h-screen px-4 mx-auto mt-10 mb-20 rounded-xl rounded- bg-gradient-to-tr from-background via-background-light to-background "
      >
        <div className="relative w-full pt-12 border shadow-sm bg-white/10 shadow-black lg:max-w-lg xl:max-w-xl rounded-2xl border-muted backdrop-blur-xl">
          {/* Logo */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center z-10 p-1.5">
            <motion.img
              src={medGuardLogo}
              alt="MedGuard Logo"
              className="object-contain w-full h-full rounded-full"
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>

          <div className="p-6 pt-4">
            <h2 className="mb-1 text-2xl font-bold text-center text-primary">
              Welcome Back
            </h2>
            <p className="mb-5 text-sm text-center text-text opacity-70">
              Sign in to your <span className="font-medium">MedGuard</span>{" "}
              account
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <FloatingInput
                icon={Mail}
                label="Email Address"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FloatingInput
                icon={Lock}
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs font-medium text-center text-danger"
                >
                  {error}
                </motion.p>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2.5 bg-gradient-to-r from-primary to-primary-dark text-black font-semibold rounded-md shadow-md transition duration-200"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader className="h-5 mx-auto animate-spin" />
                ) : (
                  "Login"
                )}
              </motion.button>
            </form>

            <div className="flex justify-between mt-4 text-xs text-primary-dark">
              <Link to="/forgot-password" className="hover:underline">
                Forgot password?
              </Link>
              <Link to="/signup" className="hover:underline">
                Create account
              </Link>
            </div>
          </div>

          <div className="px-6 py-3 text-xs text-center border-t bg-secondary border-muted rounded-b-2xl">
            <span className="opacity-70">Need help? </span>
            <a
              href="mailto:support@medguard.com"
              className="text-primary-dark hover:underline"
            >
              Contact support
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LoginPage;
