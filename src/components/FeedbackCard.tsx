import React from "react";
import Image from "next/image";
import { Feedback, CoustomerCardProps } from "../app/types/types";

const FeedbackCard: React.FC<CoustomerCardProps> = ({ feedback }) => {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white flex flex-col items-center text-center font-serif">
      <Image
        src={feedback.img}
        alt={feedback.name}
        width={80}
        height={80}
        className="rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{feedback.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{feedback.designation}</p>
      <p className="text-gray-700 mb-4 font-semibold">{feedback.message}</p>
      <div className="text-yellow-500">
        {"★".repeat(feedback.rating)}
        {"☆".repeat(5 - feedback.rating)}
      </div>
    </div>
  );
};

export default FeedbackCard;
