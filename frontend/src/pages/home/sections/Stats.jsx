import { motion } from "framer-motion";
import verifyImg from "@/assets/images/candid.jpeg";
import reportImg from "@/assets/images/candid4.jpeg";
import assistantImg from "@/assets/images/he-guy.jpeg";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
const images = [verifyImg, reportImg, assistantImg];

const stats = [
  { value: "25K+", label: "Drugs Verified" },
  { value: "5K+", label: "Fake Drugs Reported" },
  { value: "50K+", label: "Users Protected" },
  { value: "98%", label: "Accuracy" },
];

const Stats = () => {
  return (
    <div>
      <section aria-labelledby="stats-heading" className="p-4" role="region">
        <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-64 mb-10 mt-14">
          <h1 className="text-2xl md:text-4xl">
            <span className="text-primary-dark">Our Numbers </span>Speak For
            Themselves
          </h1>
          <div>
            <p className="max-w-md text-md md:text-lg">
              We’re proud of the impact we’ve made in safeguarding public
              health. These numbers go beyond digits — they represent safety,
              awareness, and the growing trust users place in verified
              medications.
            </p>
            <Link to="/signup">
              <button className="bg-black text-white hover:bg-transparent hover:text-black transform duration-300 flex items-center gap-2 px-6 py-2 mt-4 text-lg border border-black rounded-md">
                Get Started <ArrowUpRight />{" "}
              </button>
            </Link>
          </div>
        </div>
        {/* Stat Images */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4 my-4">
          {images.map((image, idx) => (
            <div key={idx}>
              <img src={image} alt={image} className="hover:scale-105 rounded-md" />
            </div>
          ))}
        </div>
        {/* Stat Numbers */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid gap-6 text-center grid-cols-2 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="">
              <div className="flex flex-col">
                <p className="text-2xl md:text-4xl font-normal text-primary font-rubik">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-sm md:text-md">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Stats;
