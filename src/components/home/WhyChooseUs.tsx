import { FaCar, FaDollarSign, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
        <p className="text-lg mb-12 text-gray-700">
          We offer top-tier services and features that make us the best choice
          for your car rental needs.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Best Prices */}
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <FaDollarSign className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Best Prices</h3>
            <p className="text-gray-600">
              Get the best rates on all our car rentals, ensuring you receive
              the most value for your money.
            </p>
          </div>

          {/* Wide Selection */}
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <FaCar className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Wide Selection</h3>
            <p className="text-gray-600">
              Choose from a wide variety of cars, from luxury models to
              budget-friendly options.
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <FaHeadset className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our support team is available around the clock to assist you with
              any needs or questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
