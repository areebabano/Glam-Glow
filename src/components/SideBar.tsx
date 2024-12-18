"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { categories } from "@/src/app/Data/blogCategory";
import { FaSearch, FaFacebook, FaTwitter, FaInstagram, FaTags, FaEnvelope, FaUserPlus, FaUserCircle, FaPinterest } from "react-icons/fa";
import { MdContentPasteSearch, MdDescription, MdOutlineSubscriptions } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const recentPosts = [
    {
      id: 1,
      image: "/recentpost1.jpg",
      title: "Top 10 Winter Fashion Trends", // Changed title to match the style
      date: "Mar 09 2019",
    },
    {
      id: 2,
      image: "/recentpost2.jpg",
      title: "The Evolution of Fashion Trends in 2024",
      date: "Oct 16 2024",
    },
    {
      id: 3,
      image: "/recentpost3.jpg",
      title: "How to Style Denim Jackets in 2024",
      date: "Aug 09 2022",
    },
    {
      id: 4,
      image: "/recentpost4.jpg",
      title: "Must-Have Accessories for the Modern Look",
      date: "Nov 11 2024",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration of 1000
  }, []);

  // Section styling
  const sectionStyle =
    "bg-white p-6 rounded-lg font-serif shadow-md mb-12 transition-shadow duration-300 hover:shadow-lg";
  
  // Box shadow for section
  const shadowStyle = {
    boxShadow: "0 4px 10px rgba(22, 52, 52)",
  };

  return (
    <aside className="w-full sm:w-full lg:w-[300px] space-y-8">
      {/* Search Section */}
      <div 
        className={`${sectionStyle}`} 
        style={shadowStyle}
        data-aos= "fade-up"
      >
        <h3 className="flex text-xl font-semibold text-black mb-4"><MdContentPasteSearch size={20} className="mr-1 mt-1 text-teal-900" /> Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for posts..."
            className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
          />
          <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Categories Section */}
      <div className={`${sectionStyle}`} style={shadowStyle} data-aos= "fade-up">
        <h3 className="flex text-xl font-semibold text-black mb-4">
          <BiCategory size={20} className="mr-2 mt-1 text-teal-900" />
          Categories
        </h3>
        <ul className="grid grid-cols-2 gap-3">
          {categories.map((category, index) => (
            <li
              key={index}
              className="text-gray-700 hover:text-teal-600 hover:underline cursor-pointer transition duration-300"
            >
              {category.name} ({category.count})
            </li>
          ))}
        </ul>
      </div>
            
    {/* Recent Post Section */}
<div className={`${sectionStyle}`} style={shadowStyle} data-aos="fade-up">
  <h3 className="flex text-xl font-semibold text-black mb-6">
    <MdDescription size={20} className="mr-2 mt-1 text-teal-900" />
    Recent Posts
  </h3>

  {recentPosts.map((post) => (
    <div key={post.id} className="flex gap-6 mb-8">
      {/* Image Wrapper */}
      <div className="w-1/3 relative h-16">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill" // Make the image fill the container size
          objectFit="cover" // Ensure the image covers the area
          className="rounded-lg"
        />
      </div>
      {/* Post Content */}
      <div className="w-2/3">
        <h6 className="text-gray-700 font-serif hover:text-teal-600 hover:underline cursor-pointer transition duration-200">
          {post.title}
        </h6>
        <p className="text-xs text-gray-500">{post.date}</p>
      </div>
    </div>
  ))}
</div>

      {/* Popular Tags Section */}
      <div className={`${sectionStyle}`} 
        style={shadowStyle} data-aos= "fade-up">
        <h3 className="flex text-xl font-semibold text-black mb-4">
          <FaTags size={20} className="mr-2 mt-1 text-teal-900" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-4">
          <span className="text-gray-700 hover:text-teal-600 cursor-pointer transition-colors duration-300">
            Technology
          </span>
          <span className="text-gray-700 hover:text-teal-600 cursor-pointer transition-colors duration-300">
            Marketing
          </span>
          <span className="text-gray-700 hover:text-teal-600 cursor-pointer transition-colors duration-300">
            Design
          </span>
          <span className="text-gray-700 hover:text-teal-600 cursor-pointer transition-colors duration-300">
            SEO
          </span>
          <span className="text-gray-700 hover:text-teal-600 cursor-pointer transition-colors duration-300">
            Business
          </span>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className={`${sectionStyle}`} 
        style={shadowStyle} data-aos= "fade-up">
        <h3 className="flex text-xl font-semibold text-black mb-4">
          <FaEnvelope size={20} className="mr-1 mt-1 text-teal-900" />Subscribe to Our Newsletter
        </h3>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
          />
          <button
            type="submit"
            className="flex items-center justify-center w-full py-3 bg-teal-900 text-white rounded-full hover:bg-pink-600 transition-colors duration-300"
          >
            <MdOutlineSubscriptions size={20} className="mr-1" /> Subscribe
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-2">We respect your privacy.</p>
      </div>

      {/* Social Links Section */}
      <div className={`${sectionStyle}`} 
        style={shadowStyle} data-aos= "fade-up">
        <h3 className="flex text-xl font-semibold text-black mb-4">
          <FaUserPlus size={20} className="mr-1 mt-1 text-teal-900" />Follow Us
        </h3>
        <div className="flex gap-4">
          <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800" />
          <FaTwitter className="text-blue-400 text-2xl cursor-pointer hover:text-blue-500" />
          <FaInstagram className="text-pink-500 text-2xl cursor-pointer hover:text-pink-600" />
          <FaPinterest className="text-red-500 text-2xl cursor-pointer hover:text-red-600" />
        </div>
      </div>

      {/* About the Author Section */}
<div className={`${sectionStyle}`} style={shadowStyle} data-aos="fade-up">
  {/* Section Title */}
  <h3 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
    <FaUserCircle size={24} className="mr-2 text-teal-700" />
    About the Author
  </h3>

  {/* Author Info */}
  <div className="flex flex-col items-center gap-5 mb-6 text-center">
    {/* Author Image */}
    <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-md border border-gray-300">
      <Image
        src="/author.jpg" // Replace with the actual image path
        alt="Areeba Hammad, the lead of Glam Glow Fashion"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>

    {/* Author Bio */}
    <div>
      <p className="text-gray-700 text-base leading-relaxed">
        <b>Areeba Hammad</b> is the lead at <b>Glam Glow</b> Fashion, specializing in digital strategies, fashion marketing, and design. With a passion for technology and fashion trends, she empowers others by sharing her knowledge and expertise.
      </p>
    </div>
  </div>

  {/* Divider */}
  <hr className="border-t border-gray-300 mb-6" />

  {/* CTA Button */}
  <div className="text-center">
    <Link
      href="/about"
      className="py-4 px-8 bg-teal-900 text-white text-sm font-semibold rounded-full hover:bg-pink-600 transition-colors duration-300"
    >
      Read More About Us
    </Link>
  </div>
</div>


    </aside>
  );
};

export default Sidebar;
