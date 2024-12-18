"use client";
import React from "react";
import { sliderSetting, Feedback } from "../app/types/types";
import FeedbackCard from "./FeedbackCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { FaComment, FaQuoteLeft } from "react-icons/fa6";

const slider: sliderSetting = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: false,
};

const FeedbackSection: React.FC = () => {
  const coustomerList: Feedback[] = [
    {
      id: 1,
      name: "John Doe",
      img: "/people1.jpg",
      message:
        "The price range of Glam Glow products is quite reasonable. I appreciate the combination of quality and affordability!",
      rating: 5,
      designation: "Marketing Manager",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      img: "/people2.jpg",
      message:
        "I ordered some accessories, and the quality is superb. I will definitely recommend Glam Glow!",
      rating: 5,
      designation: "Software Engineer",
    },
    {
      id: 3,
      name: "Michael Williams",
      img: "/people3.jpeg",
      message:
        "My online shopping experience was very smooth. The website is user-friendly, and the checkout process was easy.",
      rating: 4,
      designation: "Graphic Designer",
    },
    {
      id: 4,
      name: "Emily White",
      img: "/people4.jpg",
      message:
        "I love the designs of Glam Glow outfits. There always something new and stylish in every collection!",
      rating: 5,
      designation: "Project Manager",
    },
    {
      id: 5,
      name: "David Wilson",
      img: "/people5.jpg",
      message:
        "The customer service is fantastic. My order arrived quickly, and their response time was impressive!",
      rating: 4,
      designation: "Content Writer",
    },
    {
      id: 6,
      name: "Jessica Brown",
      img: "/people6.jpg",
      message:
        "The quality of Glam Glow products is excellent! I always shop here and have never been disappointed.",
      rating: 5,
      designation: "Freelance Developer",
    },
  ];
  return (
    <div className="py-12 bg-gray-300 font-serif">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8 text-white relative glow-text animate-bounce">
          What Our Customers Say
        </h3>
        <div className="flex justify-center">
          <div className="w-full md:w-4/5 lg:w-3/5">
            <Slider {...slider}>
              {coustomerList.map((coustomer) => (
                <FeedbackCard key={coustomer.id} feedback={coustomer} />
              ))}
            </Slider>
          </div>
        </div>
        <section className="text-center mt-10 font-serif">
          <h2 className="text-2xl font-semibold">
            Ready to Elevate Your Style?
          </h2>
          <p className="mt-4">
            Explore our collection today and join our mailing list for exclusive
            offers and updates!
          </p>
          <Link href="/">
            <button className="btn mt-4">Explore Now</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default FeedbackSection;
