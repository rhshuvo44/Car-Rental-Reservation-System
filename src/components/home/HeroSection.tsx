import car from "../../assets/image/car-right.png";

const HeroSection = () => {
  return (
    <div className="hero bg-base-200 min-h-screen px-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="">
          <img src={car} className=" rounded-lg shadow-2xl w-full" />
        </div>
        <div>
          <div className="w-2/3">
          
            <h1 className="text-5xl font-bold">
              <span className="text-[#ffa633]">Find Your Best</span>
              <br />
              Dream Car for
              <br />
              Rental
            </h1>
            <p className="py-6">
              Experience the ultimate in comfort, performance, and
              sophistication with our luxury car rentals. From sleek sedans and
              stylish coupes to spacious SUVs and elegant convertibles, we offer
              a range of premium vehicles to suit your preferences and
              lifestyle.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
