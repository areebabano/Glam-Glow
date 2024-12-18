"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { BlogCardProps } from "@/src/app/types/types";
import { FaCalendarAlt, FaPenNib } from "react-icons/fa";

const BlogCard = ({ blog }: BlogCardProps) => {
  useEffect(()=> {
    AOS.init({duration: 1000}); // Initialize AOS with duration of 1000
  }, []);
  // Box shadow for section
  const shadowStyle = {
    boxShadow: "0 4px 10px rgba(22, 52, 52)",
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8 hover:shadow-xl transition-shadow duration-300 font-serif" style={shadowStyle} data-aos= "fade-up">
      {/* Blog Image */}
      <div className="relative w-full h-96 mb-6">
        <Image
          src={blog.image}
          alt={blog.title}
          layout="fill"
          objectFit="cover"  // Ensures the image covers the container without distorting its aspect ratio
          className="rounded-lg"
        />
      </div>

      {/* Blog Content */}
      <div>
        <h2 className="text-2xl font-semibold text-[#151875] hover:text-red-600 transition-colors duration-300">
          <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h2>
        <div className="flex items-center text-gray-500 mt-2">
          <span className="flex items-center mr-4">
            <FaPenNib className="mr-1 text-red-500" />
            {blog.blogger}
          </span>
          <span className="flex items-center">
            <FaCalendarAlt className="text-yellow-500 mr-1" />
            {blog.date}
          </span>
        </div>
        <p className="mt-4 text-gray-700 text-base leading-relaxed">
          {blog.description}
        </p>
        <Link
          href={`/blog/${blog.slug}`}
          className="mt-6 inline-block text-red-600 hover:text-teal-700 font-serif transition-colors duration-300"
        >
          Read more &rarr;
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;




// import Image from "next/image";
// import Link from "next/link";
// import { BlogCardProps } from "@/src/app/types/types";
// import { FaCalendarAlt, FaPenNib } from "react-icons/fa";



// const BlogCard = ({ blog }: BlogCardProps) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 mb-8 flex flex-col md:flex-row">
//       <div className="relative w-full md:w-1/3">
//         <Image
//           src={blog.image}
//           alt={blog.title}
//           width={400}
//           height={250}
//           className="rounded-lg object-cover"
//         />
//       </div>
//       <div className="mt-6 md:mt-0 md:ml-6 flex-1">
//         <h2 className="text-xl font-bold text-[#151875]">
//           <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
//         </h2>
//         <div className="flex items-center text-gray-500 mt-2">
//           <span className="flex items-center mr-4">
//             <FaPenNib className="mr-1 text-red-500" />
//             {blog.blogger}
//           </span>
//           <span className="flex items-center">
//             <FaCalendarAlt className="text-yellow-500 mr-1" />
//             {blog.date}
//           </span>
//         </div>
//         <p className="mt-4 text-gray-700">{blog.description}</p>
//         <Link
//           href={`/blog/${blog.slug}`}
//           className="mt-6 inline-block text-red-500 hover:text-red-700"
//         >
//           Read more &rarr;
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;
