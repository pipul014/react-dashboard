import React from "react"
import { Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className="bg-teal-50 flex justify-center items-center p-3">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl">
        <div className="bg-indigo-500 text-white p-6">
          <div className="flex items-center">

            <div className="rounded-full w-32 h-32 bg-gray-300 flex items-center justify-center overflow-hidden">
              <img
                src="https://avatar.iran.liara.run/public/36"
                alt="Profile"
                className=" w-full h-full"
              />
            </div>
            <div className="ml-6">
              <h1 className="text-3xl font-semibold">pipul dolai</h1>
              <p className="text-gray-300">Frontend Developer</p>
              <p className="text-gray-200 mt-1">Location: Gurgaon, INDIA</p>
              <Link to="/about" className="text-blue-300 hover:text-blue-500 mt-2 inline-block">See Full Profile</Link>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="text-gray-700 mt-2">
            I"m a frontend developer with a focus on React and JavaScript. I enjoy building user-friendly applications that are both visually appealing and highly performant. I love learning new technologies to create amazing products.
          </p>
        </div>

        <div className="p-6 bg-gray-100">
          <h2 className="text-2xl font-semibold">Social Links</h2>
          <div className="flex gap-6 mt-4">
            <a href="https://www.linkedin.com" target="_blank" rel="" className="text-gray-600 hover:text-gray-800">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="" className="text-gray-600 hover:text-gray-800">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile
