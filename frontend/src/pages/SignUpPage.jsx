import { useState } from "react";
import { motion } from "framer-motion";
import Input from "../components/Input";
import { Loader, Lock, Mail, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signup, error, isLoading } = useAuthStore();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, name);
      navigate("/verify-email");
    } catch (error) {
      // error handled in store
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='max-w-md w-full bg-background-light bg-opacity-90 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-primary mx-auto mt-16'
    >
      <div className='p-8'>
        <h2 className='text-3xl font-bold mb-6 text-center text-primary'>
          Create Account
        </h2>
        <form onSubmit={handleSignUp}>
          <Input
            icon={User}
            type='text'
            placeholder='Full Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="focus:border-primary"
          />
          <Input
            icon={Mail}
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="focus:border-primary"
          />
          <Input
            icon={Lock}
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="focus:border-primary"
          />
          {error && <p className='text-danger font-semibold mt-2'>{error}</p>}
          <PasswordStrengthMeter password={password} />
          <motion.button
            className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-lg shadow-lg hover:from-primary-dark hover:to-primary transition duration-200'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? <Loader className=' animate-spin mx-auto' size={24} /> : "Sign Up"}
          </motion.button>
        </form>
      </div>
      <div className='px-8 py-4 bg-secondary flex justify-center'>
        <p className='text-sm text-text'>
          Already have an account?{" "}
          <Link to={"/login"} className='text-primary-dark hover:underline'>
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};
export default SignUpPage;


