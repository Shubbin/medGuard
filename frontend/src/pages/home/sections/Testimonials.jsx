import { motion } from "framer-motion";
import adaImg from "@/assets/images/approved3.jpeg";
import chinweImg from "@/assets/images/approve-test2.png";
import emekaImg from "@/assets/images/approve-test.png";
const testimonials = [
  {
    name: "Dr. Ada Okeke",
    text: "MedGuard has transformed the way I authenticate medications. I feel more confident in what I prescribe.",
    role: "Pharmacist, Lagos University Teaching Hospital",
    image: adaImg,
  },
  {
    name: "Chinwe Obi",
    text: "I quickly verified a suspicious pill in seconds. This platform is saving lives!",
    role: "Concerned Citizen, Abuja",
    image: chinweImg,
  },
  {
    name: "Emeka John",
    text: "As a volunteer in remote clinics, MedGuard gives us tools to protect the vulnerable.",
    role: "Community Health Advocate",
    image: emekaImg,
  },
];
const Testimonials = () => {
  return (
    <div>
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
          className="grid grid-cols-1 gap-8 p-10 rounded-md bg-primary-dark sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-6 text-left transition border border-gray-100 shadow bg-white/50 rounded-xl"
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
      <section className="mt-24" aria-labelledby="video-heading" role="region">
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
  );
};

export default Testimonials;
