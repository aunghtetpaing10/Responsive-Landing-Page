import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex flex-col sm:flex-row justify-center my-10 gap-5 sm:gap-12">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md text-center hover:opacity-90"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 border rounded-md hover:bg-neutral-600">
          Documentation
        </a>
      </div>
      <div className="flex justify-center mt-10 space-x-6">
        <video
          autoPlay
          loop
          muted
          className="w-1/2 rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="w-1/2 rounded-lg border border-orange-700 shadow-sm shadow-orange-400 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
