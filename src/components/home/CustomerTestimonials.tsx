import getStars from "../ui/getStars";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review:
      "Fantastic experience! The car was in excellent condition, and the customer service was top-notch.",
    rating: 5,
    location: "New York, USA",
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "Super easy to book, and the prices were unbeatable. Highly recommended!",
    rating: 4.5,
    location: "London, UK",
  },
  {
    id: 3,
    name: "Sam Wilson",
    review:
      "Great variety of cars to choose from. The support team was very helpful in answering my questions.",
    rating: 4,
    location: "Sydney, Australia",
  },
];
const CustomerTestimonials = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Customers Say</h2>
        <p className="text-lg mb-12 text-gray-700">
          Hear from our satisfied customers around the globe.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card w-full bg-gray-100 shadow-md p-6 rounded-lg"
            >
              <div className="mb-4 flex justify-center">
                {/* Star Ratings */}
                <div className="flex">{getStars(testimonial.rating)}</div>
              </div>
              <p className="italic text-gray-600 mb-4">
                &quot;{testimonial.review}&quot;
              </p>
              <h3 className="font-bold text-xl">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
