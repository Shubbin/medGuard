// import labpic from "@/assets/images/labo.jpeg";
import banner from "../../assets/images/banner.mp4";
export const AboutHero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[380px] md:h-[500px] lg:h-[712px]">
        <video
          src={banner}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        ></video>
        <div className="bg-black/50 absolute inset-0 z-10"></div>
        <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-2 sm:px-4 w-full flex flex-col items-center">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-white mb-3 md:mb-5 font-nunito drop-shadow-lg">
            Who We Are
          </h1>
          <p className="text-md md:text-2xl text-white max-w-xs sm:max-w-2xl md:max-w-5xl drop-shadow-md">
            MedGuard is Nigeria’s leading AI-powered platform dedicated to
            combating counterfeit pharmaceuticals. Our platform empowers
            everyday users, pharmacists, and health institutions with tools to
            verify, report, and trace drug authenticity instantly.
          </p>
        </div>
      </div>
    </>
  );
};
