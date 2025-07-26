// import labpic from "@/assets/images/labo.jpeg";
import banner from "../../assets/images/banner.mp4";
export const AboutHero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[712px]">
        <video
          src={banner}
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "auto" }}
        ></video>
        <div className="bg-black/50 absolute inset-0 z-10"></div>
        <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 font-nunito">
            Who We Are
          </h1>
          <p className="text-lg md:text-2xl text-white max-w-5xl">
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
