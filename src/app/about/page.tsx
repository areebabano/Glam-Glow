"use client"
import React , {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TeamSection from "../../components/TeamSection";
import {
  FaCanadianMapleLeaf,
  FaGift,
  FaGlobe,
  FaLightbulb,
  FaRegThumbsUp,
} from "react-icons/fa6";
import { HiMiniShoppingBag, HiMiniUserGroup } from "react-icons/hi2";
import { IoShieldCheckmark } from "react-icons/io5";

const About = () => {
  useEffect(()=> {
    AOS.init({duration: 1000}); // Initialize AOS with duration of 1000
  }, []);

  // Section styling
  const sectionStyle =
    "bg-gray-100 p-6 rounded-lg shadow-md mb-12 transition-shadow duration-300 hover:shadow-lg";
  
  // Box shadow for section
  const shadowStyle = {
    boxShadow: "0 4px 10px rgba(22, 52, 52)",
  };
  return (
    <div className="bg-white text-gray-800 font-serif">
      <div className="container mx-auto px-4 py-12" >
        <h1 className="text-4xl font-bold mb-8 text-white flex items-center glow-text" data-aos= "fade-right">
          <HiMiniShoppingBag
            className="w-8 h-8 text-teal-900 mr-2"
            aria-hidden="true"
          />
          Who We Are
        </h1>
        <section className={`${sectionStyle}`} style={shadowStyle} data-aos= "fade-up">
          <h2 className="text-2xl font-bold flex items-center">
            <FaGlobe
              className="w-6 h-6 text-teal-900 mr-2"
              aria-hidden="true"
            />
            Company Overview
          </h2>
          <p className="mt-4 leading-relaxed">
            At <b>Glam Glow,</b> we are dedicated to providing stylish and affordable
            fashion for everyone. Founded in 2024, we have transformed the
            fashion landscape by offering quality products that empower personal
            expression.
          </p>
        </section>
        <section className={`${sectionStyle}`} style={shadowStyle} data-aos= "fade-up">
          <h2 className="text-2xl font-bold flex items-center">
            <FaLightbulb
              className="w-6 h-6 text-teal-900 mr-2"
              aria-hidden="true"
            />
            Mission Statement
          </h2>
          <p className="mt-4 leading-relaxed">
            At <b>Glam Glow</b>, we aim to redefine fashion by offering a diverse
            selection of trendy clothing and accessories that cater to all
            styles and occasions. We believe that everyone deserves to feel
            confident and beautiful in what they wear.
          </p>
        </section>
        <section className={`${sectionStyle}`} style={shadowStyle} data-aos= "fade-up">
          <h2 className="text-2xl font-bold flex items-center mb-2">
            <IoShieldCheckmark
              className="w-6 h-6 text-teal-900 mr-2"
              aria-hidden="true"
            />
            Values and Ethics
          </h2>
          <h3 className="font-bold">Core Values</h3>
          <ul className="list-disc list-inside mt-4 leading-relaxed">
            <li>
              Integrity: We prioritize honesty and transparency in our business
              practices.
            </li>
            <li>
              Quality: We are committed to offering products that meet high
              standards of quality and craftsmanship.
            </li>
            <li>
              Inclusivity: Fashion is for everyone, and we strive to ensure our
              offerings are accessible to all.
            </li>
          </ul>
        </section>
        <section className={`${sectionStyle}`} style={shadowStyle} data-aos= "fade-up">
          <h2 className="text-2xl font-bold flex items-center">
            <HiMiniUserGroup
              className="w-6 h-6 text-teal-900 mr-2"
              aria-hidden="true"
            />
            Meet the Glam Glow Team!
          </h2>
          <p className="mt-4 leading-relaxed">
            Our dedicated team is passionate about fashion and committed to
            providing the best shopping experience for our customers.
          </p>
          <TeamSection />
        </section>
        <section className={`${sectionStyle}`} style={shadowStyle} data-aos= "fade-up">
          <h2 className="text-2xl font-bold flex items-center">
            <FaGift className="w-6 h-6 text-teal-900 mr-2" aria-hidden="true" />
            What We Offer
          </h2>
          <p className="mt-4 leading-relaxed">
            <b>Glam Glow</b> provides a wide range of products for both men and women,
            including:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>
              Clothing: From casual wear to formal attire, our collection
              features the latest trends.
            </li>
            <li>Accessories: Elevate your look with our unique accessories.</li>
          </ul>
        </section>
        <section className={`${sectionStyle}`} style={shadowStyle} data-aos= "fade-up">
          <h2 className="text-2xl font-bold flex items-center">
            <FaRegThumbsUp
              className="w-6 h-6 text-teal-900 mr-2"
              aria-hidden="true"
            />
            Customer Commitment
          </h2>
          <p className="mt-4 leading-relaxed">
            We are dedicated to ensuring our customers are completely satisfied
            with their purchases, offering friendly customer support and a
            satisfaction guarantee on all our products.
          </p>
        </section>
        <section className={`${sectionStyle}`} style={shadowStyle} data-aos= "fade-up">
          <h2 className="text-2xl font-bold flex items-center">
            <FaCanadianMapleLeaf
              className="w-6 h-6 text-teal-900 mr-2"
              aria-hidden="true"
            />
            Sustainability Practices
          </h2>
          <p className="mt-4 leading-relaxed">
            At <b>Glam Glow</b>, we are deeply committed to environmental
            responsibility. Our eco-friendly initiatives include sourcing
            sustainable materials, reducing waste in our production processes,
            and actively participating in community-driven sustainability
            projects. By integrating these practices, we aim to make fashion not
            just beautiful, but also mindful of the planet's future.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
