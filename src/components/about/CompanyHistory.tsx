const companyHistory = {
  foundingYear: 2010,
  founders: ["Alice Johnson", "Bob Smith"],
  initialMission: "To create innovative tech solutions for small businesses.",
  foundingLocation: "San Francisco, CA",
  mission:
    "To provide innovative solutions that empower businesses to achieve their goals.",
  vision:
    "To be a global leader in technology solutions, recognized for our commitment to excellence and customer satisfaction.",
};
const CompanyHistory = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">Company History</h1>

      {/* Founding Year Section */}
      <div className="bg-white p-5 rounded-lg shadow-md mb-5">
        <h2 className="text-2xl font-semibold mb-2">Founding Year</h2>
        <p className="text-lg">
          Founded in {companyHistory.foundingYear}, our company was established
          by {companyHistory.founders.join(" and ")} in{" "}
          {companyHistory.foundingLocation}.
        </p>
        <p className="text-lg italic">
          Initial Mission: {companyHistory.initialMission}
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white p-5 rounded-lg shadow-md mb-5">
        <h2 className="text-2xl font-semibold mb-2">Mission</h2>
        <p className="text-lg">{companyHistory.mission}</p>
      </div>

      {/* Vision Section */}
      <div className="bg-white p-5 rounded-lg shadow-md mb-5">
        <h2 className="text-2xl font-semibold mb-2">Vision</h2>
        <p className="text-lg">{companyHistory.vision}</p>
      </div>
    </div>
  );
};

export default CompanyHistory;
