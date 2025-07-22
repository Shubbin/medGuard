import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";

const EmailVerificationPage = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const { error, isLoading, verifyEmail } = useAuthStore();

  const handleChange = (index, value) => {
    const newCode = [...code];
    if (value.length > 1) {
      const pastedCode = value.replace(/\D/g, "").slice(0, 6).split(""); // ✅ Clean pasted input
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("").replace(/\D/g, "").trim(); // ✅ Sanitize final code

    if (verificationCode.length !== 6) return;

    try {
      await verifyEmail(verificationCode);
      navigate("/");
    } catch (error) {
      // error handled in store
    }
  };

  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
    // eslint-disable-next-line
  }, [code]);

  return (
    <div className='max-w-md w-full bg-background-light bg-opacity-90 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-primary mx-auto mt-16'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='p-8 w-full max-w-md'
      >
        <h2 className='text-3xl font-bold mb-6 text-center text-primary'>
          Verify Your Email
        </h2>
        <p className='text-center text-text mb-6'>
          Enter the 6-digit code sent to your email address.
        </p>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='flex justify-between'>
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type='text'
                inputMode='numeric'
                pattern='\d*'
                maxLength='1'
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className='w-12 h-12 text-center text-2xl font-bold bg-secondary text-primary border-2 border-primary rounded-lg focus:border-primary-dark focus:outline-none'
              />
            ))}
          </div>
          {error && <p className='text-danger font-semibold mt-2'>{error}</p>}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            disabled={isLoading || code.some((digit) => !digit)}
            className='w-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-primary-dark hover:to-primary transition duration-200'
          >
            {isLoading ? "Verifying..." : "Verify Email"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default EmailVerificationPage;
