"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Image from "next/image";
import { newArrival } from "@/src/app/Data/newarrival";
import { useState } from "react";
import { useCart } from "@/src/app/context/CartContext";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useFavourite } from "@/src/app/context/FavouriteContext";
import { FaCreditCard, FaHeart, FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const ProductDetailsPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const productId = parseInt(params.id, 10);
  const { cart, addToCart } = useCart();
  const [successMessage, setSuccessMessage] = useState("");
  const {favourites, addToFavourites, removeFromFavourites} = useFavourite()



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

  const [quantity , setQuantity] = useState(1)
  // const [totalPrice , setTotalPrice] = useState(product.price)

  const handleIncrement = () => {
    setQuantity(quantity => quantity + 1);
    // setTotalPrice((quantity) => (quantity + 1) * product.price)
  }

  const handleDecrement = () => {
    if(quantity > 1){
      setQuantity(quantity => quantity - 1)
      // setTotalPrice((quantity) => (quantity - 1) * product.price)
    }
  }

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
        <div className="w-full md:w-1/3 ">
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-lg text-black font-bold mb-4 flex gap-4">
            ${product.price}
            <del className="text-gray-500 font-normal">${product.price + 15}.00</del>
            </p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className='flex mb-4 text-lg font-bold items-center flex gap-4'>
            Quantity
      <button className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition' onClick={handleDecrement}>
        -
      </button>
      <span className='mx-4'>{quantity}</span>
      <button className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition' onClick={handleIncrement}>
        +
      </button>
    </div>
          <p className='text-xl font-bold mb-4'>Total: ${totalPrice}</p>
          <div className='mb-4'>{generateRating(product.rating)}</div>
          <div className="flex flex-col md:flex-row space-x-4">
          <button
              onClick={() => router.push("/checkout")} // Implement buy now logic
              className="flex items-center justify-center w-full gap-1 bg-orange-500 text-white px-2 py-3 rounded-md hover:bg-orange-600 transition"
            >
              <FaCreditCard className="w-5 h-5"/>
              <span className="text-md">Buy Now</span>
            </button>
          {/* <button
            onClick={() => alert("Added to cart!")} // Implement add to cart logic
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Add to Cart
          </button> */}
          <button
              onClick={handleAddToCart} // Implement add to cart logic
              className="flex items-center justify-center w-full gap-1 bg-blue-500 text-white px-2 py-3 rounded-md hover:bg-blue-600 transition"
            >
              <FaShoppingCart className="w-5 h-5"/>
               <span className="text-md">Add to Cart</span>
               
            </button>
            <button
              onClick={handleFavoriteToggle}
              className="text-3xl"
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

export default ProductDetailsPage;





// import React from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { newArrival } from "@/app/Data/newarrival";

// const ProductDetailsPage = ({ params }: { params: { id: string } }) => {
//   const router = useRouter();
//   const productId = parseInt(params.id, 10);

//   // Find the product by id
//   const product = newArrival.find((p) => p.id === productId);

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   return (
//     <div className="p-4">
//       <div className="flex flex-col md:flex-row items-center">
//         <div className="w-full md:w-1/2">
//           <Image
//             src={product.img}
//             alt={product.title}
//             width={500}
//             height={600}
//             className="object-cover rounded-lg"
//           />
//         </div>
//         <div className="w-full md:w-1/2 md:pl-8">
//           <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
//           <p className="text-lg text-gray-700 mb-4">{product.price}</p>
//           <p className="text-gray-600 mb-4">
//             {/* Add product description or any other detail you want */}
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
//             urna vitae libero tincidunt fringilla.
//           </p>
//           <button
//             onClick={() => alert("Added to cart!")} // Implement add to cart logic
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailsPage;
