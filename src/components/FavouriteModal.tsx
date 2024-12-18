import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { favouriteProduct, favouriteModal } from "../app/types/types"; // Adjust this path to your actual type location
import { useFavourite } from "../app/context/FavouriteContext"; // Adjust the import path
import { IoHeartCircle } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

const FavouriteModal: React.FC<favouriteModal> = ({ isOpen, onClose }) => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const { favourites, removeFromFavourites } = useFavourite();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 font-serif">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-screen overflow-auto transition-transform transform">
        <div className="flex items-center justify-between mb-4">
          <h2
            className="flex justify-center items-center text-2xl font-bold gap-1"
            data-aos="fade-right"
          >
            <IoMdHeartEmpty />
            Your Favourites
          </h2>
          <button
            className="text-2xl font-bold text-gray-600 hover:text-gray-800 "
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        {favourites.length === 0 ? (
          <p className="text-gray-600">No favourite products added yet.</p>
        ) : (
          <div>
            <ul className="mb-4">
              {favourites.map((product) => (
                <li
                  key={product.id}
                  className="flex justify-between items-center mb-4 border-b pb-2"
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-24 h-24 object-cover mr-4 rounded transition-transform transform hover:scale-105"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{product.title}</h3>
                    {/* <p className="text-gray-600">{product.description}</p> */}
                    <p className="text-lg text-gray-600 font-bold mb-4">
                      ${product.price}
                    </p>
                    <p className="font-bold">
                      Added on:{" "}
                      {product.favouritedAt?.toLocaleDateString() || "N/A"}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromFavourites(product.id!)}
                    className="text-red-600 hover:text-red-800 font-semibold transition duration-300"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          className="mt-2 bg-gray-500 text-white font-bold py-2 px-4 rounded w-full hover:bg-gray-600 transition duration-300 "
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FavouriteModal;
