"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { cartModal } from "../app/types/types";
import { useCart } from "../app/context/CartContext";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";

const CartModal: React.FC<cartModal> = ({ isOpen, onClose }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [quantity, setQuantity] = useState(1);
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [editQuantities, setEditQuantities] = useState<{
    [id: number]: number;
  }>({});

  if (!isOpen) return null;

  const handleIncrement = (id: number) => {
    setEditQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
    updateQuantity(id, (editQuantities[id] || 1) + 1);
  };

  const handleDecrement = (id: number) => {
    if (editQuantities[id] > 1) {
      setEditQuantities((prev) => ({
        ...prev,
        [id]: (prev[id] || 1) - 1,
      }));
      updateQuantity(id, (editQuantities[id] || 1) - 1);
    }
  };

  const totalCost = cart.reduce((total, item) => {
    if (item.id !== undefined) {
      return (
        total + item.price * (editQuantities[item.id] || item.quantity || 0)
      );
    }
    return total;
  }, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 font-serif">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-screen overflow-y-auto transition-transform transform">
        <div className="flex items-center justify-between mb-4">
          <h2
            className="flex justify-center items-center text-2xl font-bold gap-1"
            data-aos="fade-right"
          >
            <IoCartOutline />
            Your Cart
          </h2>
          <button
            className="text-2xl font-bold text-gray-600 hover:text-gray-800"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        {cart.length === 0 ? (
          <p className="text-gray-600">No items in your cart yet.</p>
        ) : (
          <div>
            <ul className="mb-4">
              {cart.map(
                (item) =>
                  item.id !== undefined && ( // Check if id is defined before using it
                    <li
                      key={item.id}
                      className="flex justify-between items-center mb-4 border-b pb-2"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-24 h-24 object-cover mr-4 rounded transition-transform transform hover:scale-105"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <div className="mb-4 mt-4 text-sm font-bold gap-4 items-center flex">
                          Quantity
                          <button
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                            onClick={() => handleDecrement(item.id!)}
                          >
                            -
                          </button>
                          <span className="mx-4">
                            {editQuantities[item.id] || item.quantity || 1}
                          </span>
                          <button
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                            onClick={() => handleIncrement(item.id!)}
                          >
                            +
                          </button>
                        </div>
                        <p className="text-lg text-gray-600 font-bold mb-4 flex gap-4">
                          ${item.price}
                          <del className="text-gray-500 font-normal">
                            ${item.price + 15}.00
                          </del>
                        </p>
                        <p className="font-semibold">
                          Total: $
                          {(
                            item.price *
                            (editQuantities[item.id] || item.quantity || 0)
                          ).toFixed(2)}
                        </p>
                      </div>

                      {/* Show delete icon on large screens */}
                      <button
                        onClick={() => removeFromCart(item.id!)}
                        className="text-red-600 hover:text-red-800 font-semibold transition duration-300 hidden sm:block"
                      >
                        Remove
                      </button>

                      {/* Show delete icon on mobile screens */}
                      <button
                        onClick={() => removeFromCart(item.id!)}
                        className="text-red-600 hover:text-red-800 font-semibold transition duration-300 sm:hidden"
                      >
                        <FaTrash />
                      </button>
                    </li>
                  )
              )}
            </ul>
            <div className="flex justify-between items-center font-bold mb-4">
              <span>Total Cost:</span>
              <span>${totalCost.toFixed(2)}</span>
            </div>

            {/* Buttons (Close and Checkout) in the same line */}
            <div className="flex justify-between mt-2 gap-4">
              <button
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300 w-full"
                onClick={onClose}
              >
                Close
              </button>
              <Link href="/checkout">
                <button
                  className="bg-teal-900 hover:bg-pink-800 font-bold text-white py-2 px-4 rounded-lg w-full flex items-center justify-center gap-2"
                  // onClick={() => alert("Proceed to checkout")}
                >
                  <FaCreditCard />
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
