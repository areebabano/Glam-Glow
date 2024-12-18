import React, { useState } from "react";
import { Product } from "../app/types/types"; // Assuming Product type is already defined
import { categories } from "../app/Data/product";
import { newArrival } from "../app/Data/newarrival";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import debounce from "lodash.debounce"; // For debouncing search

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const router = useRouter();

  // Combine all products from categories and new arrivals
  const allProducts: Product[] = [
    ...categories.flatMap((category) => category.products),
    ...newArrival,
  ];

  // Handle input change and debounce the search
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 0) {
      setShowSuggestions(true);
      handleSearch(query);
    } else {
      setShowSuggestions(false);
    }
  };

  // Debounced search to avoid excessive filtering
  const handleSearch = debounce((query: string) => {
    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filtered);
  }, 300);

  // Navigate to search results page when "Enter" is pressed
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      setShowSuggestions(false);
    }
  };

  // Handle when a product suggestion is clicked
  const handleSuggestionClick = (product: Product) => {
    setSearchQuery(product.title);
    setShowSuggestions(false);
    router.push(`/product/${product.id}`);
  };

  return (
    <div className="relative w-full mb-2 sm:w-[300px] md:w-[60%] lg:w-[500px] mx-auto font-serif">
      {/* Search bar */}
      <div className="flex items-center py-3 rounded-full p-2 bg-white focus-within:ring-2 focus-within:ring-teal-500 transition-shadow duration-300 ease-in-out">
        {/* <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="ml-2 outline-none w-full"
          placeholder="Enter product name...."
        /> */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="ml-2 outline-none w-full text-sm sm:text-base lg:text-md" // Adjusted font size
          placeholder="Enter product name...."
        />

        <FaSearch
          onClick={() => {
            if (searchQuery.trim()) {
              router.push(
                `/search?query=${encodeURIComponent(searchQuery.trim())}`
              );
            }
          }}
          className="text-gray-400 cursor-pointer mr-2"
          size="20"
        />
      </div>

      {/* Suggestions dropdown */}
      {showSuggestions && (
        <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 z-50 max-h-60 overflow-auto shadow-lg transition-all duration-300 ease-in-out">
          {suggestions.length > 0 ? (
            suggestions.map((product) => (
              <li
                key={product.id}
                className="p-2 hover:bg-gray-100 flex items-center transition-colors duration-200"
                onClick={() => handleSuggestionClick(product)}
              >
                {/* Product image */}
                <img
                  src={product.img ? product.img : "/images/fallback.png"} // Add fallback image
                  alt={product.title}
                  className="w-10 h-10 object-cover mr-2 rounded-lg"
                />
                <span className="text-gray-700 hover:text-teal-500 transition-colors duration-200">
                  {product.title}
                </span>
              </li>
            ))
          ) : (
            <p className="p-2 text-gray-500">No suggestions found.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
