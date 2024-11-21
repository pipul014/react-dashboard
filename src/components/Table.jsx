import React from "react";

const Table = () => {
  const data = [
    { id: 0, name: "Pipul Dolai", email: "pipuldolai@example.com", role: "Admin" },
    { id: 2, name: "Rohit Sharma", email: "rohitsharma@example.com", role: "User" },
    { id: 3, name: "Rohan dais", email: "rohandias@example.com", role: "User" },
    { id: 4, name: "Shyam", email: "shyam@example.com", role: "User" },
    { id: 5, name: "James ", email: "james@example.com", role: "Admin" },
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
            >
              <td className="px-6 py-4 ">{item.id}</td>
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
