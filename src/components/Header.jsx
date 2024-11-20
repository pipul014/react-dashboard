import React, { useState } from "react";
import { Search } from "lucide-react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-teal-500 shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold hover:text-white">
        <a href="#">Dashboard</a>
      </h1>
      <div className="flex items-center rounded">
        <a href="#">
          <Search className="text-gray-500" />
        </a>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 border-none rounded"
        />
      </div>
    </div>
  );
};

export default Header;
