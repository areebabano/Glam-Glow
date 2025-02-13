"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { categories } from "@/src/app/Data/product"; // Ensure this imports your product data
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useCart } from "@/src/app/context/CartContext";
import { useFavourite } from "@/src/app/context/FavouriteContext";
import { FaCreditCard, FaHeart, FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const { cart, addToCart } = useCart();
  const { favourites, addToFavourites, removeFromFavourites } = useFavourite();
  const [quantity, setQuantity] = useState(1);
  const [successMessage, setSuccessMessage] = useState("");

  const category = categories.find((category) =>
    category.products.some((product) => product.id === parseInt(id))
  );

  if (!category) {
    return <p>Category not found</p>;
  }

  const product = category.products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  // Generate star rating
  const generateRating = (rating: number) => {
    return (
      <div className="flex gap-1 text-[20px] text-[#FF9529]">
        {Array.from({ length: 5 }, (_, i) =>
          i < rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
        )}
      </div>
    );
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const totalPrice = quantity * product.price;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      imageUrl: product.img,
      title: product.title,
      description: product.description,
      price: product.price,
      quantity,
    });
    setSuccessMessage("Product added to cart successfully!");

    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  };

  const isFavorite = favourites.some((fav) => fav.id === product.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromFavourites(product.id!);
    } else {
      addToFavourites(product);
    }
  };

  // Authentication check (optional)
  useEffect(() => {
    const checkAuthentication = async () => {
      const session = await getSession();
      if (!session) {
        router.push("/login");
      }
    };
    checkAuthentication();
  }, [router]);

  return (
    <div className="p-4 mb-2 font-serif">
      <div className="flex flex-col md:flex-row items-center p-12">
        <div className="w-full md:w-1/2">
          <Image
            src={product.img}
            alt={product.title}
            width={400}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-lg text-black font-bold mb-4 flex gap-4">
            ${product.price}
            <del className="text-gray-500 font-normal">
              ${product.price + 15}.00
            </del>
          </p>
          <div className="mb-4">{generateRating(product.rating)}</div>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="flex mb-8 text-lg font-bold gap-4 items-center">
            <span>Quantity</span>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="mx-4">{quantity}</span>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <p className="text-xl font-bold mb-4">Total: ${totalPrice}</p>
          <div className="flex flex-col gap-4 mt-4 md:flex-row">
            <button
              onClick={() => router.push("/checkout")}
              className="flex items-center justify-center w-full gap-2 bg-orange-500 text-white px-4 py-3 rounded-md hover:bg-orange-600 transition"
            >
              <FaCreditCard />
              Buy Now
            </button>
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center w-full gap-2 bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 transition"
            >
              <FaShoppingCart />
              Add to Cart
            </button>
            <button
              onClick={handleFavoriteToggle}
              className="flex justify-center text-3xl w-full md:w-auto"
            >
              {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
            </button>
          </div>
          {successMessage && (
            <p className="text-black font-bold mt-4">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;


// // app/product/[id]/page.tsx
// "use client";
// import React, { useEffect } from "react";
// import { useParams } from "next/navigation";
// import { categories } from "@/src/app/Data/product"; // Ensure this imports your product data
// import Image from "next/image";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import { useState } from "react";
// import { useCart } from "@/src/app/context/CartContext";
// import { useFavourite } from "@/src/app/context/FavouriteContext";
// import { FaCreditCard, FaHeart, FaRegHeart } from "react-icons/fa6";
// import { CiShoppingCart } from "react-icons/ci";
// import { BsCart } from "react-icons/bs";
// import { FaShoppingCart } from "react-icons/fa";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// const ProductDetailPage = () => {
//   const router = useRouter();
//   const { id } = useParams<{ id: string }>(); // Get the product ID from the URL
//   const { cart, addToCart } = useCart();
//   const [quantity, setQuantity] = useState(1);
//   const [successMessage, setSuccessMessage] = useState("");
//   const { favourites, addToFavourites, removeFromFavourites } = useFavourite();
//   // Find the category that contains the product
//   const category = categories.find((category) =>
//     category.products.some((product) => product.id === parseInt(id))
//   );

//   if (!category) {
//     return <p>Category not found</p>;
//   }

//   // Find the product within the category
//   const product = category.products.find(
//     (product) => product.id === parseInt(id)
//   );

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   // Generate star rating
//   const generateRating = (rating: number) => {
//     return (
//       <div className="flex gap-1 text-[20px] text-[#FF9529]">
//         {Array.from({ length: 5 }, (_, i) =>
//           i < rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
//         )}
//       </div>
//     );
//   };

//   // const [totalPrice , setTotalPrice] = useState(product.price)

//   const handleIncrement = () => {
//     setQuantity((prev) => prev + 1);
//     // setTotalPrice((quantity) => (quantity + 1) * product.price)
//   };

//   const handleDecrement = () => {
//     setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
//     // setTotalPrice((quantity) => (quantity - 1) * product.price)
//   };

//   const totalPrice = quantity * product.price;

//   const handleAddToCart = () => {
//     addToCart({
//       id: product.id,
//       imageUrl: product.img,
//       title: product.title,
//       description: product.description,
//       price: product.price,
//       quantity,
//     });
//     setSuccessMessage("Product added to cart successfully!");

//     // Hide message after 3 second

//     setTimeout(() => {
//       setSuccessMessage("");
//     }, 2000);
//   };

//   const isFavorite = favourites.some((fav) => fav.id === product.id);

//   const handleFavoriteToggle = () => {
//     if (isFavorite) {
//       removeFromFavourites(product.id!);
//     } else {
//       addToFavourites(product);
//     }
//   };

//   return (
//     <div className="p-4 mb-2 font-serif">
//       <div className="flex flex-col md:flex-row items-center p-12">
//         <div className="w-full md:w-1/2">
//           <Image
//             src={product.img}
//             alt={product.title}
//             width={400}
//             height={500}
//             className="object-cover rounded-lg"
//           />
//         </div>
//         <div className="w-full md:w-1/3">
//           <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
//           <p className="text-lg text-black font-bold mb-4 flex gap-4">
//             ${product.price}
//             <del className="text-gray-500 font-normal">
//               ${product.price + 15}.00
//             </del>
//           </p>
//           <div className="mb-4">{generateRating(product.rating)}</div>
//           <p className="text-gray-600 mb-4">{product.description}</p>

//           <div className="flex mb-8 text-lg font-bold gap-4 items-center">
//             <span>Quantity</span>
//             <button
//               className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
//               onClick={handleDecrement}
//             >
//               -
//             </button>
//             <span className="mx-4">{quantity}</span>
//             <button
//               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//               onClick={handleIncrement}
//             >
//               +
//             </button>
//           </div>
//           {/* <p className="text-xl font-bold mb-4">Total: ${totalPrice}</p> */}
//           {/* <div className="mb-4">{generateRating(product.rating)}</div> */}
//           {/* Action Buttons */}
//           <div className="flex flex-col gap-4 mt-4 md:flex-row">
//             <button
//               onClick={() => router.push("/checkout")}
//               className="flex items-center justify-center w-full gap-2 bg-orange-500 text-white px-4 py-3 rounded-md hover:bg-orange-600 transition"
//             >
//               <FaCreditCard />
//               Buy Now
//             </button>
//             <button
//               onClick={handleAddToCart}
//               className="flex items-center justify-center w-full gap-2 bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 transition"
//             >
//               <FaShoppingCart />
//               Add to Cart
//             </button>
//             <button
//               onClick={handleFavoriteToggle}
//               className="flex justify-center text-3xl w-full md:w-auto"
//             >
//               {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
//             </button>
//           </div>
//           {/* Success Message  */}
//           {successMessage && (
//             <p className="text-black font-bold mt-4">{successMessage}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;
