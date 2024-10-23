const carFleet = [
  {
    id: 1,
    type: "Economy",
    name: "Toyota Corolla",
    description: "A reliable and fuel-efficient compact car.",
    pricePerDay: 30,
    photoUrl: "https://via.placeholder.com/200x150?text=Toyota+Corolla",
  },
  {
    id: 2,
    type: "Luxury",
    name: "BMW 5 Series",
    description: "Experience luxury and performance with this executive sedan.",
    pricePerDay: 100,
    photoUrl: "https://via.placeholder.com/200x150?text=BMW+5+Series",
  },
  {
    id: 3,
    type: "SUV",
    name: "Honda CR-V",
    description: "Spacious and versatile SUV, perfect for family trips.",
    pricePerDay: 70,
    photoUrl: "https://via.placeholder.com/200x150?text=Honda+CR-V",
  },
  {
    id: 4,
    type: "Convertible",
    name: "Mazda MX-5 Miata",
    description:
      "A sporty convertible that delivers an exhilarating driving experience.",
    pricePerDay: 90,
    photoUrl: "https://via.placeholder.com/200x150?text=Mazda+MX-5+Miata",
  },
];
const OurFleet = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">Our Fleet</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {carFleet.map((car) => (
          <div key={car.id} className="bg-white rounded-lg shadow-lg p-5">
            <img
              src={car.photoUrl}
              alt={car.name}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h2 className="text-xl font-semibold">{car.name}</h2>
            <p className="text-gray-600">{car.description}</p>
            <p className="font-bold text-lg">Price: ${car.pricePerDay} / day</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFleet;
