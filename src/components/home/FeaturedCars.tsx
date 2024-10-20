const cars = [
  {
    id: 1,
    image: "car-image-1.jpg",
    name: "Tesla Model S",
    description: "Electric, luxurious, and fast.",
    price: "$100/day",
  },
  {
    id: 2,
    image: "car-image-2.jpg",
    name: "BMW 5 Series",
    description: "Comfortable and stylish.",
    price: "$85/day",
  },
  {
    id: 3,
    image: "car-image-3.jpg",
    name: "Audi A6",
    description: "Performance and elegance combined.",
    price: "$90/day",
  },
 
];
const FeaturedCars = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Cars</h2>
      <div className="grid grid-cols-3">
        {cars.map((car) => (
          
            <div className="card w-96 bg-white shadow-xl mx-auto">
              <figure>
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{car.name}</h2>
                <p>{car.description}</p>
                <div className="card-actions justify-between items-center">
                  <span className="text-lg font-bold">{car.price}</span>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
         
        ))}
      </div>
    </section>
  );
};

export default FeaturedCars;
