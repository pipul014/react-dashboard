import React from "react";

const Table = () => {
  const data = [
    { id: 1, name: "Pipul Dolai", email: "pipuldolai@example.com", role: "Admin" },
    { id: 2, name: "Rohit Sharma", email: "rohitsharma@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
    { id: 4, name: "Alice Smith", email: "alice@example.com", role: "User" },
    { id: 5, name: "Jane Doe", email: "jane@example.com", role: "Admin" },
  ];

  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="min-w-full table-auto">
        <thead className="bg-teal-600 text-white text-lg">
          <tr>
            <th className="px-6 py-3 text-left">S.NO</th>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Email</th>
            <th className="px-6 py-3 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id}
              className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
            >
              <td className="px-6 py-4">{item.id}</td>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.email}</td>
              <td className="px-6 py-4">{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
