import React from "react";

const Table = () => {
  const data = [
    { name: "Pipul Dolai", email: "pipuldolai@gmail.com", status: "Active" },
    { name: "Rahul Roy", email: "rahulroy@gmail.com", status: "Inactive" },
    { name: "Ajay Sharma", email: "ajaysharma@gmail.com", status: "Active" },
    { name: "Ajay Sharma", email: "ajaysharma@gmail.com", status: "Active" },
    { name: "Ajay Sharma", email: "ajaysharma@gmail.com", status: "Active" },
    { name: "Ajay Sharma", email: "ajaysharma@gmail.com", status: "Active" },
    { name: "Ajay Sharma", email: "ajaysharma@gmail.com", status: "Active" },
    { name: "Ajay Sharma", email: "ajaysharma@gmail.com", status: "Active" },
    { name: "Ajay Sharma", email: "ajaysharma@gmail.com", status: "Active" },
    { name: "Ajay Sharma", email: "ajaysharma@gmail.com", status: "Active" },
    { name: "Ajay Sharma", email: "ajaysharma@gmail.com", status: "Active" },
  ];

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <table className="min-w-full text-sm ">
        <thead className="bg-blue-300">
          <tr>
            <th className="py-3 px-4 text-left">S.NO</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Email</th>
            <th className="py-3 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index} className="border-b ">
              <td className="py-3 px-4">{index+1}</td>
              <td className="py-3 px-4">{user.name}</td>
              <td className="py-3 px-4">{user.email}</td>
              <td className="py-3 px-4">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
