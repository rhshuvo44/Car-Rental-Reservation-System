const teamMembers = [
    {
      id: 1,
      name: 'Alice Johnson',
      role: 'CEO',
      photoUrl: 'https://via.placeholder.com/150?text=Alice+Johnson',
    },
    {
      id: 2,
      name: 'Bob Smith',
      role: 'CTO',
      photoUrl: 'https://via.placeholder.com/150?text=Bob+Smith',
    },
    {
      id: 3,
      name: 'Carol Williams',
      role: 'CFO',
      photoUrl: 'https://via.placeholder.com/150?text=Carol+Williams',
    },
    {
      id: 4,
      name: 'David Brown',
      role: 'CMO',
      photoUrl: 'https://via.placeholder.com/150?text=David+Brown',
    },
  ];
  const OurTeam: React.FC = () => {
    return (
      <div className="container mx-auto p-5">
        <h1 className="text-3xl font-bold mb-5">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg p-5 text-center">
              <img
                src={member.photoUrl}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-3"
              />
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OurTeam;