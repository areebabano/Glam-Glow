import React from "react";
import Image from "next/image";
import { Product } from "../app/types/types";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCard: React.FC<Product> = ({
  id,
  img,
  title,
  description,
  rating,
  price,
}) => {
  const genrateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );

      default:
        return null;
    }
  };
  return (
     <div className="border-2 shadow-md font-serif hover:scale-105 transition duration-300 ease-in-out container px-4 py-4 border-gray-200 rounded-xl max-w-[400px] h-[480px] flex flex-col">
      <div className="flex-grow" style={{ position: 'relative', width: '100%', height: '300px' }}>
        <Image
          className="rounded-md mb-4"
          src={img}
          alt={title}
          // layout="responsive"
          // width={200}
          // height={300}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="space-y-2 py-2 flex-grow flex flex-col">
        <h2 className="text-black text-lg font-bold">{title}</h2>
        {/* <p className="text-gray-500 max-w-[150px]">{description}</p> */}
        <div>{genrateRating(rating)}</div>
        <div className="font-bold flex gap-4">
            ${price}
            <del className="text-gray-500 font-normal">${price + 15}.00</del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
