import React, { useEffect, useState, Suspense } from "react";
import { categories } from "../app/Data/product";
import { newArrival } from "../app/Data/newarrival";
import { Product } from "../app/types/types";
import ProductCard from "./ProductCard";
import { FaSearch } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const SearchResults: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration of 1000
  }, []);

  // Get the search query from URL params
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  // Combine all products from categories and new arrivals
  const allProducts: Product[] = [
    ...categories.flatMap((category) => category.products),
    ...newArrival,
  ];

  // Filter products based on the search query
  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 font-serif">
      <h1
        className="text-3xl font-bold mb-8 text-white flex items-center glow-text"
        data-aos="fade-right"
      >
        <FaSearch className="w-8 h-8 text-teal-900 mr-2" aria-hidden="true" />
        Search Results for "{query}"
      </h1>
      {!query ? (
        <p>Please enter a search query to find products.</p>
      ) : filteredProducts.length === 0 ? (
        <p>
          No products found for "{query}". Please try again with different
          keywords.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <ProductCard
                img={product.img}
                title={product.title}
                description={product.description}
                rating={product.rating}
                price={product.price}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// Wrap SearchResults component with Suspense boundary
const SuspenseWrapper: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
};

export default SuspenseWrapper;
