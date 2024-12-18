"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { newArrival } from "@/src/app/Data/newarrival";
import { useState } from "react";
import { useCart } from "@/src/app/context/CartContext";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useFavourite } from "@/src/app/context/FavouriteContext";
import { FaCreditCard, FaHeart, FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const ProductDetailsPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const productId = parseInt(params.id, 10);
  const { cart, addToCart } = useCart();
  const [successMessage, setSuccessMessage] = useState("");
  const { favourites, addToFavourites, removeFromFavourites } = useFavourite();

  // Find the product by id
  const product = newArrival.find((p) => p.id === productId);

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

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
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
      removeFromFavourites(product.id || productId);
    } else {
      addToFavourites(product);
    }
  };

  return (
    <div className="p-4 font-serif">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-6 sm:mr-4 !mr-4">
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={product.img}
            alt={product.title}
            width={400}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-lg text-black font-bold flex gap-4">
            ${product.price}
            <del className="text-gray-500 font-normal">
              ${product.price + 15}.00
            </del>
          </p>
          <p className="text-gray-600">{product.description}</p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <span className="font-bold">Quantity</span>
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

          {/* Total Price */}
          <p className="text-xl font-bold">Total: ${totalPrice}</p>

          {/* Star Rating */}
          <div className="flex items-center">
            {generateRating(product.rating)}
          </div>

          {/* Action Buttons */}
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

          {/* Success Message */}
          {successMessage && (
            <p className="text-green-600 font-bold mt-4">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
