// app/product/[id]/page.tsx
"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { categories } from "@/src/app/Data/product"; // Ensure this imports your product data
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useState } from "react";
import { useCart } from "@/src/app/context/CartContext";
import { useFavourite } from "@/src/app/context/FavouriteContext";
import { FaCreditCard, FaHeart, FaRegHeart } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Link from "next/link";

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>(); // Get the product ID from the URL
  const { cart, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [successMessage, setSuccessMessage] = useState("");
  const {favourites, addToFavourites, removeFromFavourites} = useFavourite()
  // Find the category that contains the product
  const category = categories.find((category) =>
    category.products.some((product) => product.id === parseInt(id))
  );

  if (!category) {
    return <p>Category not found</p>;
  }

  // Find the product within the category
  const product = category.products.find(
    (product) => product.id === parseInt(id)
  );

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


  // const [totalPrice , setTotalPrice] = useState(product.price)

 const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    // setTotalPrice((quantity) => (quantity + 1) * product.price)
  };

  const handleDecrement = () => {
      setQuantity((prev) => (prev > 1 ? prev - 1: prev));
      // setTotalPrice((quantity) => (quantity - 1) * product.price)
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

    // Hide message after 3 second

    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  };

  const isFavorite = favourites.some((fav) => fav.id === product.id);

  const handleFavoriteToggle = () => {
    if(isFavorite){
      removeFromFavourites(product.id!)
    } else{
      addToFavourites(product)
    }
  }

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
          
          <div className="flex mb-8 text-lg font-bold flex gap-4 items-center">

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
          {/* <p className="text-xl font-bold mb-4">Total: ${totalPrice}</p> */}
          {/* <div className="mb-4">{generateRating(product.rating)}</div> */}
          <div className="flex flex-col md:flex-row space-x-4 ">
            {/* <Link href="/checkout"> */}
            <button
              onClick={() => router.push("/checkout")} // Implement buy now logic
              className="flex items-center justify-center w-full gap-1 bg-orange-500 text-white px-2 py-3 rounded-md hover:bg-orange-600 transition"
            >
              <FaCreditCard className="w-5 h-5"/>
              <span className="text-md">Buy Now</span>
            </button>
            {/* </Link> */}
            <button
              onClick={handleAddToCart} // Implement add to cart logic
              className="flex items-center justify-center w-full gap-1 bg-blue-500 text-white px-2 py-3 rounded-md hover:bg-blue-600 transition"
            >
              <FaShoppingCart className="w-5 h-5"/>
               <span className="text-md">Add to Cart</span>
               
            </button>
            <button
              onClick={handleFavoriteToggle}
              className="text-3xl "
            >
              {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
            </button>
          </div>
          {/* Success Message  */}
          {successMessage && (
            <p className="text-black font-bold mt-4">{successMessage}</p>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

// {/*
// // "use client"
// // import React from 'react';
// // import Image from 'next/image';
// // import { useParams } from 'next/navigation';
// // import { categories } from '@/app/Data/product'; */}
// {/* // import { AiFillStar, AiOutlineStar } from 'react-icons/ai'; */}

// {/* // const CategoryDetailPage = () => { */}
// //   const params = useParams();
// //   const categoryName = params.name;
// //   const category = categories.find(cat => cat.name === categoryName);

// //   if (!category) {
// //     return <p>Category not found</p>;
// //   }

// //   const genrateRating = (rating: number) => {
// //     const stars = Array(5)
// //       .fill(0)
// //       .map((_, i) =>
// //         i < rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
// //       );
// //     return <div className="flex gap-1 text-[20px] text-[#FF9529]">{stars}</div>;
// //   };

// //   return (
// //     <div className="p-4">
// //       <h1 className="text-2xl font-bold mb-4">{categoryName} Products</h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// //         {category.products.map((product, index) => (
// //           <div key={index} className="border-2 shadow-md container px-4 py-12 border-gray-200 rounded-xl max-w-[400px]">
// //             <div>
// //               <Image
// //                 src={product.img}
// //                 alt={product.title}
// //                 width={200}
// //                 height={300}
// //                 className="w-full h-auto h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-md mb-4"
// //               />
// //             </div>
// //             <div className="p-2">
// //               <h2 className="text-lg font-bold">{product.title}</h2>
// //               <p className="text-gray-500 max-w-[150px]">{product.description}</p>
// //               <div>{genrateRating(product.rating)}</div>
// //               <div className="font-bold flex gap-4">
// //                 ${product.price}
// //                 <del className="text-gray-500 font-normal">${(product.price + 15).toFixed(2)}</del>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CategoryDetailPage;

// // "use client";
// // import React from 'react';
// // import Image from 'next/image';
// // import { useParams } from 'next/navigation';
// // import { categories } from '@/app/Data/product';
// // import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

// // // TypeScript interface for params
// // interface Params {
// //   name: string;
// // }

// // const CategoryDetailPage: React.FC = () => {
// //   const { name } = useParams();
// //   const category = categories.find(cat => cat.name === name);

// //   if (!category) {
// //     return <p>Category not found</p>;
// //   }

// //   // Generate star rating
// //   const generateRating = (rating: number) => {
// //     return (
// //       <div className="flex gap-1 text-[20px] text-[#FF9529]">
// //         {Array.from({ length: 5 }, (_, i) =>
// //           i < rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
// //         )}
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className="p-4">
// //       <h1 className="text-2xl font-bold mb-4">{name} Products</h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// //         {category.products.map((product) => (
// //           <div key={product.id} className="border-2 shadow-md px-4 py-12 border-gray-200 rounded-xl max-w-[400px]">
// //             <div>
// //               <Image
// //                 src={product.img}
// //                 alt={product.title}
// //                 width={400}
// //                 height={500}
// //                 className="w-full h-auto md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-md mb-4"
// //               />
// //             </div>
// //             <div className="p-2">
// //               <h2 className="text-lg font-bold">{product.title}</h2>
// //               <p className="text-gray-500 max-w-[150px]">{product.description}</p>
// //               <div>{generateRating(product.rating)}</div>
// //               <div className="font-bold flex gap-4">
// //                 ${product.price}
// //                 <del className="text-gray-500 font-normal">${(product.price + 15).toFixed(2)}</del>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CategoryDetailPage;
