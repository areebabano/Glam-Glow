"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import { categories } from "../Data/product";
const CategoriesPage = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="p-12 mb-4 md:py-0 max-w-7xl mx-auto font-serif lg:mt-8">
      <h1
        className="text-4xl text-center font-bold mb-8 text-white glow-text"
        data-aos="fade-right"
      >
        Explore Our Exclusive Collections
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link
            href={`/category/${category.name}`}
            key={index}
            className="relative block group card border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={500}
              height={300}
              className="object-cover w-full h-64 transition duration-300 group-hover:opacity-75"
            />
            {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg text-white text-lg font-bold"> */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg text-white text-lg font-bold transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-2xl">{category.name}</span>
              <p className="text-sm">Explore our latest collection!</p>
              <div className="absolute top-2 right-2">
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  New
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default CategoriesPage;

