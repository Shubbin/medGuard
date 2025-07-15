import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonials";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <main className="relative min-h-screen px-6 py-16 overflow-hidden bg-white sm:px-12 md:px-20">
        <Features />
        {/* Stats */}
        <Stats />
        {/* Testimonials */}
        <Testimonials />
      </main>
    </>
  );
};

export default Home;
