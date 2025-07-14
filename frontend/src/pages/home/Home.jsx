import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { ScanSearch, Mic, Camera, ShieldCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";

// import heroBg from "/assets/images/approved1.jpeg";
import verifyImg from "@/assets/images/candid.jpeg";
import reportImg from "@/assets/images/candid4.jpeg";
import assistantImg from "@/assets/images/he-guy.jpeg";
import adaImg from "@/assets/images/approved3.jpeg";
import chinweImg from "@/assets/images/approve-test2.png";
import emekaImg from "@/assets/images/approve-test.png";
import Hero from "./sections/Hero";

const testimonials = [
  {
    name: "Dr. Ada Okeke",
    text: "MedGuard has transformed the way I authenticate medications. I feel more confident in what I prescribe.",
    role: "Pharmacist, Lagos University Teaching Hospital",
    image: adaImg
  },
  {
    name: "Chinwe Obi",
    text: "I quickly verified a suspicious pill in seconds. This platform is saving lives!",
    role: "Concerned Citizen, Abuja",
    image: chinweImg
  },
  {
    name: "Emeka John",
    text: "As a volunteer in remote clinics, MedGuard gives us tools to protect the vulnerable.",
    role: "Community Health Advocate",
    image: emekaImg
  }
];

const features = [
  {
    title: "Verify Medicine",
    desc: "Enter NAFDAC code or scan the packaging to confirm authenticity within seconds.",
    icon: <ScanSearch className="w-6 h-6 text-primary" />,
    image: verifyImg
  },
  {
    title: "Snap & Report",
    desc: "Take a photo of suspicious drugs—our AI analyzes and flags potential fakes.",
    icon: <Camera className="w-6 h-6 text-primary" />,
    image: reportImg
  },
  {
    title: "AI Voice Assistant",
    desc: "Talk to MedGuard: ask about drug names, symptoms, or safe alternatives.",
    icon: <Mic className="w-6 h-6 text-primary" />,
    image: assistantImg
  }
];

const stats = [
  { value: "25K+", label: "Drugs Verified" },
  { value: "5K+", label: "Fake Drugs Reported" },
  { value: "50K+", label: "Users Protected" }
];

const staggerVariants = {
  visible: { transition: { staggerChildren: 0.2 } },
  hidden: {}
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Home = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <>
    <Hero />
      <main className="relative min-h-screen px-6 py-16 overflow-hidden bg-white sm:px-12 md:px-20">
        <Helmet>
          <title>MedGuard — Verify Drugs Instantly</title>
          <meta
            name="description"
            content="MedGuard uses AI to verify drug authenticity and fight fake medications in seconds."
          />
          <meta
            property="og:title"
            content="MedGuard — AI-Powered Drug Safety"
          />
          <meta property="og:image" content="/assets/images/approved1.jpeg" />
        </Helmet>

        {/* Background Effects */}
        <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-primary/10 blur-3xl rounded-full z-0" />
        <div className="absolute bottom-[-120px] right-[-60px] w-[250px] h-[250px] bg-primary/10 blur-2xl rounded-full z-0" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Hero Section */}
          {/* <section className="relative mb-16 overflow-hidden shadow-lg rounded-2xl" role="region" aria-labelledby="hero-title">
          <img src={heroBg} alt="Medication safety" className="w-full h-[400px] object-cover opacity-30" loading="lazy" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-extrabold text-transparent md:text-6xl bg-gradient-to-r from-primary to-primary-dark bg-clip-text"
            >
              Safeguard Every Pill. Empower Every Person.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="max-w-2xl mt-6 text-lg text-gray-700 md:text-xl"
            >
              MedGuard is your AI-powered sentinel—verify drugs, report counterfeits, and protect lives in seconds.
            </motion.p>
          </div>
        </section> */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="inline-block px-4 py-2 mt-4 text-sm text-green-800 bg-green-100 rounded-full"
          >
            Trusted by 100+ health institutions in Nigeria
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerVariants}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            <motion.div variants={fadeUp}>
              <Link
                to={isAuthenticated ? "/verify" : "/login"}
                className="flex items-center gap-2 px-6 py-3 text-blue-500 transition shadow bg-primary rounded-xl hover:scale-105"
              >
                <ScanSearch className="w-5 h-5" />{" "}
                {isAuthenticated ? "Verify Now" : "Login to Start"}
              </Link>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link
                to={isAuthenticated ? "/dashboard" : "/signup"}
                className="flex items-center gap-2 px-6 py-3 transition border border-primary text-primary rounded-xl hover:bg-primary/5"
              >
                <ShieldCheck className="w-5 h-5" />{" "}
                {isAuthenticated ? "Report Drug" : "Create Account"}
              </Link>
            </motion.div>
          </motion.div>

          {/* Features */}
          <section
            aria-labelledby="features-heading"
            className="mt-20"
            role="region"
          >
            <h2 id="features-heading" className="sr-only">
              App Features
            </h2>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerVariants}
              className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3"
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
                    className="object-cover w-full h-40 transition-transform duration-500 hover:scale-105"
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

          {/* Stats */}
          <section
            aria-labelledby="stats-heading"
            className="mt-20"
            role="region"
          >
            <h2 id="stats-heading" className="sr-only">
              Impact Statistics
            </h2>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerVariants}
              className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="p-6 shadow bg-primary/5 rounded-xl"
                >
                  <p className="text-3xl font-extrabold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Testimonials */}
          <section
            aria-labelledby="testimonials-heading"
            className="mt-24"
            role="region"
          >
            <h2
              id="testimonials-heading"
              className="mb-10 text-3xl font-bold text-primary-dark"
            >
              Real Stories. Real Impact.
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="p-6 text-left transition bg-white border border-gray-100 shadow rounded-xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="object-cover w-12 h-12 rounded-full"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-sm italic text-gray-700">“{t.text}”</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Video Section */}
          <section
            className="mt-24"
            aria-labelledby="video-heading"
            role="region"
          >
            <h2
              id="video-heading"
              className="mb-6 text-2xl font-bold text-gray-800"
            >
              How MedGuard Works
            </h2>
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/HpF0vzbD1h4"
                title="MedGuard Explainer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
