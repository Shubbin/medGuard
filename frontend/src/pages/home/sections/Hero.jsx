import { motion } from "framer-motion";
import heroBg from "@/assets/images/science.jpeg";
import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { ScanSearch, ShieldCheck, LogIn } from "lucide-react";
const staggerVariants = {
  visible: { transition: { staggerChildren: 0.2 } },
  hidden: {},
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const Hero = () => {
  const { isAuthenticated } = useAuthStore();
  return (
    <div>
      <section className="relative w-full ">
        {/* Banner Image */}
        <img
          src={heroBg}
          alt="Industrial procurement banner"
          className="w-full h-[500px] md:h-[700px] object-cover"
          loading="lazy"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10 bg-black/50 backdrop-brightness-60" />
        {/* Heading */}
        <div className="absolute z-30 text-white top-10 left-10 ">
          <h1 className="top-0 mb-6 text-2xl font-light leading-tight md:text-6xl drop-shadow-xl font-rubik">
            MedGuard
          </h1>
        </div>
        <div className="absolute z-30 flex items-center justify-center px-6 mx-auto text-center text-white flex-col bottom-20 max-w-7xl">
          <div className="flex flex-col flex-wrap justify-between md:flex-nowrap md:flex-row md:gap-48">
            <span>
              <h1 className="mb-2 text-xl md:text-3xl leading-tight text-left lg:text-5xl font-heading">
                Your Health,<span className="text-blue-500">Safeguarded.</span>{" "}
                Always.
              </h1>
              <p className="text-sm mb-2 md:mb-0 lg:text-md flex items-center gap-4">
                <span className="rounded-full h-2 w-2 bg-green-500"></span>
                Trusted by 100+ health institutions in Nigeria
              </p>
            </span>
            <p className="max-w-xl mb-10 text-sm leading-relaxed text-left text-gray-100 lg:text-lg drop-shadow">
              MedGuard delivers smart, reliable, and real-time health monitoring
              solutions—empowering individuals and healthcare providers with the
              tools they need to act fast and stay informed. Because when it
              comes to your well-being, every second counts.
            </p>
          </div>
        </div>
        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          className="absolute bottom-7 left-7 z-30 flex justify-center gap-4 mt-10"
        >
          <motion.div variants={fadeUp}>
            <Link
              to={isAuthenticated ? "/verify" : "/login"}
              className="text-sm flex items-center gap-2 px-6 py-3 bg-white text-blue-500 transition shadow bg-primary rounded-md hover:scale-105"
            >
              {/* Toggle login and scan search based on auth status */}
              {isAuthenticated ? (
                <ScanSearch className="w-2 h-2 md:w-5 md:h-5" />
              ) : (
                <LogIn />
              )}
              {isAuthenticated ? "Verify Now" : "Login to Start"}
            </Link>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Link
              to={isAuthenticated ? "/dashboard" : "/signup"}
              className="text-sm flex items-center gap-2 px-6 py-3 transition border border-primary text-primary rounded-xl hover:bg-primary/5 text-white"
            >
              <ShieldCheck className="w-5 h-5" />{" "}
              {isAuthenticated ? "Report Drug" : "Create Account"}
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
