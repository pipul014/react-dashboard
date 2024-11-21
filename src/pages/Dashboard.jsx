import React from "react";
import Card from "../components/Card"
import Table from "../components/Table";


const Dashboard = () => {
  const cardData = [
    { title: "Income", value: "₹45,000" },
    { title: "Users", value: "10,432" },
    { title: "Orders", value: "1,232" },
    { title: "Feedback", value: "678" }
  ];

  return (
    <div className="bg-teal-50  p-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} value={card.value} />
        ))}
      </div>
      <Table />
    </div>
  );
};

export default Dashboard;
