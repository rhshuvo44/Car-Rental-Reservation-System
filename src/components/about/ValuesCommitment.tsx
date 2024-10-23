import { IoPeople, IoLeaf, IoRocket, IoHome } from "react-icons/io5";

const valuesCommitment = {
  customerService: {
    icon: <IoPeople className="h-6 w-6 text-blue-500" />,
    title: "Exceptional Customer Service",
    description:
      "We strive to provide our customers with the highest level of service.",
  },
  sustainability: {
    icon: <IoLeaf className="h-6 w-6 text-green-500" />,
    title: "Commitment to Sustainability",
    description: "We are committed to reducing our environmental footprint.",
  },
  innovation: {
    icon: <IoRocket className="h-6 w-6 text-yellow-500" />,
    title: "Innovative Solutions",
    description:
      "We believe in continuously improving our services and products.",
  },
  community: {
    icon: <IoHome className="h-6 w-6 text-purple-500" />,
    title: "Community Engagement",
    description:
      "We actively participate in our community, supporting local initiatives.",
  },
};
const ValuesCommitment = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">Values & Commitment</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {Object.entries(valuesCommitment).map(([key, value]) => (
          <div key={key} className="bg-white rounded-lg shadow-lg p-5">
            <div className="flex items-center mb-2">
              {value.icon}
              <h2 className="text-2xl font-semibold ml-2">{value.title}</h2>
            </div>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesCommitment;
