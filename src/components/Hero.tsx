import Banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen  max-md:items-start max-md:pt-5 max-sm:pt-18">
      <div className="hero-content  flex-col lg:flex-row lg:gap-48 px-0">
        <div className="max-md:text-center">
          <h1 className="text-6xl max-md:text-4xl font-bold">
            Build Your Ideal <br />
            <span className="text-gradient"> Development Stack</span>
          </h1>
          <p className="py-6 max-w-lg text-[1.1rem]">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex gap-3 max-md:justify-center pt-8">
            <button className="btn gradient border-none text-white">
              Explore Technologies
            </button>
            <button className="btn btn-outline text-gray-600 border-gray-300 px-8">Learn More</button>
          </div>
        </div>
        <img alt="Tailwind CSS hero component" src={Banner} className="" />
      </div>
    </div>
  );
};

export default Hero;
