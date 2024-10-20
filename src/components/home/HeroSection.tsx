import car from "../../assets/image/car-right.png";

const HeroSection = () => {
  return (
  
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${car})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
      {/* Overlay */}
      <div className="relative flex flex-col justify-center items-center h-full text-center text-white">
        {/* Hero Content */}
        <h1 className="text-5xl font-bold mb-4">Find Your Perfect Ride</h1>
        <p className="text-lg mb-6">Quick and easy booking process</p>

        {/* Call to Action Button */}
        <button className="btn btn-primary mb-8">Book Now</button>

        {/* Search Bar */}
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md flex flex-col sm:flex-row gap-4 items-center w-full max-w-4xl">
          <input
            type="text"
            placeholder="Enter Location"
            className="input w-full sm:w-1/3 bg-gray-100 text-gray-900 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="date"
            placeholder="Pick-up Date"
            className="input w-full sm:w-1/3 bg-gray-100 text-gray-900 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="date"
            placeholder="Return Date"
            className="input w-full sm:w-1/3 bg-gray-100 text-gray-900 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button className="btn btn-secondary w-full sm:w-auto">
            Check Availability
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
