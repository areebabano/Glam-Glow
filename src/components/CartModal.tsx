// import React, { useState } from "react";
// import { cartModal } from "../types/types";
// import { useCart } from "../context/CartContext";

// const CartModal: React.FC<cartModal> = ({ isOpen, onClose }) => {
//   const [quantity, setQuantity] = useState(1);
//   const { cart, removeFromCart, updateQuantity } = useCart();
//   const [editQuantities, setEditQuantities] = useState<{
//     [id: number]: number;
//   }>({});

//   if (!isOpen) return null;

//   const handleIncrement = (id: number) => {
//     setEditQuantities((prev) => ({
//       ...prev,
//       [id]: (prev[id] || 1) + 1,
//     }));
//     updateQuantity(id, (editQuantities[id] || 1) + 1);
//   };

//   const handleDecrement = (id: number) => {
//     if (editQuantities[id] > 1) {
//       setEditQuantities((prev) => ({
//         ...prev,
//         [id]: (prev[id] || 1) - 1,
//       }));
//       updateQuantity(id, (editQuantities[id] || 1) - 1);
//     }
//   };

//   const totalCost = cart.reduce((total, item) => {
//     if (item.id !== undefined) {
//       return (
//         total + item.price * (editQuantities[item.id] || item.quantity || 0)
//       );
//     }
//     return total;
//   }, 0);

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-lg max-w-lg w-full max-h-screen overflow-auto">
//         <h2 className="text-xl mb-4 font-bold">Your Cart</h2>
//         {cart.length === 0 ? (
//           <p>No items in your cart yet.</p>
//         ) : (
//           <div>
//             <ul className="mb-4">
//               {cart.map(
//                 (item) =>
//                   item.id !== undefined && (
//                     <li
//                       key={item.id}
//                       className="flex justify-between items-center mb-4 border-b pb-2"
//                     >
//                       <img
//                         src={item.imageUrl}
//                         alt={item.title}
//                         className="w-24 h-24 object-cover mr-4 rounded"
//                       />
//                       <div className="flex-1">
//                         <h3 className="font-bold">{item.title}</h3>
//                         <p className="text-gray-600">{item.description}</p>
//                         <div className="flex mb-4 mt-4 text-sm font-bold flex gap-4 items-center">
//                           Quantity
//                           <button
//                             className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
//                             onClick={() => handleDecrement(item.id!)}
//                           >
//                             -
//                           </button>
//                           <span className="mx-4">
//                             {editQuantities[item.id] || item.quantity || 1}
//                           </span>
//                           <button
//                             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//                             onClick={() => handleIncrement(item.id!)}
//                           >
//                             +
//                           </button>
//                         </div>
//                         <p className="text-lg text-black font-bold mb-4 flex gap-4">
//                           ${item.price}
//                           <del className="text-gray-500 font-normal">
//                             ${item.price + 15}.00
//                           </del>
//                         </p>
//                         <p className="font-semibold">
//                           Total: $
//                           {(
//                             item.price *
//                             (editQuantities[item.id] || item.quantity || 0)
//                           ).toFixed(2)}
//                         </p>
//                       </div>
//                       <button
//                         onClick={() => removeFromCart(item.id!)}
//                         className="text-red-600 hover:text-red-800 ml-4"
//                       >
//                         Remove
//                       </button>
//                     </li>
//                   )
//               )}
//             </ul>
//             <div className="flex justify-between items-center font-bold mb-4">
//               <span>Total Cost:</span>
//               <span>${totalCost.toFixed(2)}</span>
//             </div>
//             <button
//               className="mt-4 bg-red-500 text-white py-2 px-4 rounded w-full"
//               onClick={() => alert("Proceed to checkout")}
//             >
//               Checkout
//             </button>
//           </div>
//         )}
//         <button
//           className="mt-4 bg-gray-500 text-white py-2 px-4 rounded w-full"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartModal;
"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { cartModal } from "../app/types/types";
import { useCart } from "../app/context/CartContext";
import { it } from "node:test";
import { FaShoppingCart } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";

const CartModal: React.FC<cartModal> = ({ isOpen, onClose }) => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [quantity, setQuantity] = useState(1);
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [editQuantities, setEditQuantities] = useState<{
    [id: number]: number;
  }>({});

  if (!isOpen) return null;

  // Handle increment for a specific item
  const handleIncrement = (id: number) => {
    setEditQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1, // Increment by 1
    }));
    updateQuantity(id, (editQuantities[id] || 1) + 1); // Call updateQuantity with the new value
  };

  // Handle decrement for a specific item
  const handleDecrement = (id: number) => {
    if (editQuantities[id] > 1) {
      setEditQuantities((prev) => ({
        ...prev,
        [id]: (prev[id] || 1) - 1, // Decrement by 1
      }));
      updateQuantity(id, (editQuantities[id] || 1) - 1); // Call updateQuantity with the new value
    }
  };
  // const handleIncrement = () => {
  //   setQuantity((quantity) => quantity + 1);
  //   // setTotalPrice((quantity) => (quantity + 1) * product.price)
  // };

  // const handleDecrement = () => {
  //   if (quantity > 1) {
  //     setQuantity((quantity) => quantity - 1);
  //     // setTotalPrice((quantity) => (quantity - 1) * product.price)
  //   }
  // };

  // calculate total cost

  const totalCost = cart.reduce((total, item) => {
    if (item.id !== undefined) {
      return (
        total + item.price * (editQuantities[item.id] || item.quantity || 0)
      );
    }
    return total;
  }, 0);

  const handleQuantityChange = (id: number, quantity: number) => {
    setEditQuantities((prev) => ({ ...prev, [id]: quantity }));
  };

  const handleSavedQuantity = (id: number) => {
    if (id !== undefined) {
      updateQuantity(id, editQuantities[id] || 0);
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 font-serif">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-screen overflow-y-auto transition-transform transform">
        <div className="flex items-center justify-between mb-4">
          <h2
            className="flex justify-center items-center text-2xl font-bold gap-1"
            data-aos="fade-right"
          >
            <FaShoppingCart />
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
                        <div className="flex mb-4 mt-4 text-sm font-bold flex gap-4 items-center">
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
                      <button
                        onClick={() => removeFromCart(item.id!)} // Use non-null assertion since we're checking `id`
                        className="text-red-600 hover:text-red-800 font-semibold transition duration-300"
                      >
                        Remove
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
              <button
                className="bg-teal-900 hover:bg-pink-800 font-bold text-white py-2 px-4 rounded-lg w-full flex items-center justify-center gap-2"
                onClick={() => alert("Proceed to checkout")}
              >
                <FaCreditCard/>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;

//   return (
//     <div className="fixed inset-0 bg-blackbg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-lg max-w-lg w-full">
//         <h2 className="text-xl mb-4">Your Cart</h2>
//         {cart.length === 0 ? (
//             <p>No items in your cart yet.</p>
//         ) : (
//             <ul>
//             {cart.map((item) => {
//               // Ensure `item` is defined and `item.id` is a number
//               if (item.id !== undefined) {
//                 return (
//                   <li key={item.id} className="flex justify-between items-center mb-2">
//                     <span>{item.title} x {item.quantity || 0}</span>
//                     <button
//                     //   onClick={() => removeFromCart(item.id)}
//                     onClick={() => item.id !== undefined && removeFromCart(item.id)}
//                       className="text-red-600 hover:text-red-800"
//                     >
//                       Remove
//                     </button>
//                   </li>
//                 );
//               }
//               return null; // Return null for undefined items
//             })}
//           </ul>
//             // <ul>
//             //     {cart.map((item) => (
//             //         <li key={item.id} className="flex justify-between items-center mb-2">
//             //             <span>{item.title} x {item.quantity}</span>
//             //             <button onClick={()=> removeFromCart(item.id)}>
//             //                 Remove
//             //             </button>
//             //         </li>
//             //     ))}
//             // </ul>
//         )}

//         <button
//           className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
