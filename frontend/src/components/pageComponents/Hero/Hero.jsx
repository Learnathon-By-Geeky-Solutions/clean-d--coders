import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center">
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1561346745-5db62ae43861?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Reach your goals faster with expert mentors
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200">
          Accelerate your professional growth with 1:1 expert guidance of{" "}
          <span className="font-semibold">32,271+</span> mentors in our
          community.
        </p>

        {/* CTA button */}
        <Link
          to="/mentors"
          className="mt-8 px-8 py-3 bg-blue-400 hover:bg-blue-700 text-white font-semibold rounded-lg text-lg transition-colors inline-block"
        >
          Find Your Mentor
        </Link>
      </div>
    </div>
  );
};

export default Hero;
