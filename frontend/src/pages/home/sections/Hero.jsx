import heroBg from "@/assets/images/science.jpeg";
const Hero = () => {
  return (
    <div>
      <section className="relative w-full ">
        {/* Banner Image */}
        <img
          src={heroBg}
          alt="Industrial procurement banner"
          className="w-full h-[500px] md:h-[650px] object-cover"
          loading="lazy"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10 bg-black/50 backdrop-brightness-60" />
        <div className="absolute z-30 text-white top-10 left-10 ">
          <h1 className="top-0 mb-6 text-2xl font-light leading-tight md:text-6xl drop-shadow-xl font-rubik">
            MedGuard
          </h1>
        </div>
        <div className="absolute z-30 flex items-center justify-center px-6 mx-auto text-center text-white flx-col bottom-20 max-w-7xl">
          <div className="flex justify-between gap-48">
            <h1 className="mb-6 text-2xl leading-tight text-left md:text-3xl font-heading drop-shadow-xl">
              Your Health, Safeguarded. Always.
            </h1>
            <p className="max-w-xl mb-10 text-lg leading-relaxed text-left text-gray-100 md:text-lg drop-shadow">
              MedGuard delivers smart, reliable, and real-time health monitoring
              solutions—empowering individuals and healthcare providers with the
              tools they need to act fast and stay informed. Because when it
              comes to your well-being, every second counts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
