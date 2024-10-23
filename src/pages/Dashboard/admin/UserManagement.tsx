interface User {
  id: number;
  name: string;
  email: string;
  role: "user" | "admin";
  status: "active" | "blocked";
}

import { useState } from "react";

const initialUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "user",
    status: "active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "admin",
    status: "active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "user",
    status: "blocked",
  },
];

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const toggleStatus = (userId: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId
          ? { ...user, status: user.status === "active" ? "blocked" : "active" }
          : user
      )
    );
  };

  const changeRole = (userId: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId
          ? { ...user, role: user.role === "user" ? "admin" : "user" }
          : user
      )
    );
  };

  return (
    <div className="p-6 w-full bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">User Management</h2>
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="text-left border-b">
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Role</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.role}</td>
              <td className="p-4">
                <span
                  className={`px-2 py-1 text-sm rounded ${
                    user.status === "active"
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="p-4">
                <button
                  onClick={() => toggleStatus(user.id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                >
                  {user.status === "active" ? "Block" : "Activate"}
                </button>
                <button
                  onClick={() => changeRole(user.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  {user.role === "user" ? "Make Admin" : "Make User"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
