// import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-background flex items-center justify-center relative overflow-hidden">
      {/* <motion.div
 className='w-16 h-16 border-4 border-t-4 border-t-primary-dark border-primary rounded-full'
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  > 
      </motion.div> */}
      <Shield
        className="animate-pulse text-blue-400 fill-primary-dark "
        size={80}
      />
    </div>
  );
};

export default LoadingSpinner;
