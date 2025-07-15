import { ScanSearch, Mic, Camera } from "lucide-react";
import verifyImg from "@/assets/images/candid.jpeg";
import reportImg from "@/assets/images/candid4.jpeg";
import assistantImg from "@/assets/images/he-guy.jpeg";
import { motion } from "framer-motion";
const features = [
  {
    title: "Verify Medicine",
    desc: "Enter NAFDAC code or scan the packaging to confirm authenticity within seconds.",
    icon: <ScanSearch className="w-6 h-6 text-primary" />,
    image: verifyImg,
  },
  {
    title: "Snap & Report",
    desc: "Take a photo of suspicious drugs—our AI analyzes and flags potential fakes.",
    icon: <Camera className="w-6 h-6 text-primary" />,
    image: reportImg,
  },
  {
    title: "AI Voice Assistant",
    desc: "Talk to MedGuard: ask about drug names, symptoms, or safe alternatives.",
    icon: <Mic className="w-6 h-6 text-primary" />,
    image: assistantImg,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const staggerVariants = {
  visible: { transition: { staggerChildren: 0.2 } },
  hidden: {},
};
const Features = () => {
  return (
    <div>
      {/* Heading */}
      <div>
        <h1 className="text-5xl font-bold">
          Our <span className="text-primary-dark">Features</span>
          <div className="flex my-4 w-full h-1">
            <div className="w-24 bg-blue-500 rounded-l-full"></div>
            <div className="w-52 bg-black rounded-r-full"></div>
          </div>
        </h1>
        <p className="text-2xl text-gray-500 pb-2">
          Powerful tools to monitor, protect and manage your medical data with
          confidence
        </p>
      </div>
      <section className="">
        <h2 id="features-heading" className="sr-only">
          App Features
        </h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 pt-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="overflow-hidden transition-all bg-white border border-gray-100 shadow rounded-xl hover:shadow-xl"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="object-cover object-center w-full h-44 transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Features;
