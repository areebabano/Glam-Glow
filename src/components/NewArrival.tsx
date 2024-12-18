import React from "react";
import Link from "next/link";
import { newArrival } from "../app/Data/newarrival";
import ProductCard from "./ProductCard";

const NewProducts: React.FC = () => {
  return (
    <div className="container pt-16 font-serif max-w-7xl mx-auto">
      <h1 className="font-bold text-4xl text-center pb-6 text-teal-900">
        <span className="text-white glow-text"> New Arrivals: </span>
        <span className="text-gray-500 fade-in-out">Latest Trends for You</span>
      </h1>

      {/* Grid Layout for Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8 mx-auto">
        {newArrival.map((item) => (
          <Link href={`/newarrival/${item.id}`} key={item.id}>
            <ProductCard
              img={item.img}
              title={item.title}
              description={item.description}
              rating={item.rating}
              price={item.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
