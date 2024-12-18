"use client"
import Link from "next/link";
import React , {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCommentAlt, FaHandsHelping, FaShareAlt } from "react-icons/fa";
import {
  FaComment,
  FaCommentDots,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaPinterest,
  FaRegComment,
  FaTwitter,
} from "react-icons/fa6";

const Contact = () => {
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

  const inputClass = "mt-1 block w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-teal-700";
  return (
    <div className="bg-white text-gray-800 font-serif">
      <div className="container mx-auto px-4 py-12">
        <h1
          className="text-4xl font-bold mb-8 text-white flex items-center glow-text"
          data-aos="fade-right"
        >
          <FaEnvelope
            className="w-8 h-8 text-teal-900 mr-2"
            aria-hidden="true"
          />
          Contact Us
        </h1>
        <section
          className={`${sectionStyle}`}
          style={shadowStyle}
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold flex items-center">
          <FaHandsHelping
              className="w-6 h-6 text-teal-900 mr-2"
              aria-hidden="true"
            />
            We're here to help!
          </h2>
          <p className="mt-4 leading-relaxed">
            Welcome to <b>Glam Glow!</b> Our team is passionate about delivering
            exceptional customer experiences. Whether you have a question about
            our products, need styling advice, or want to share your feedback,
            we're here to listen. Please don't hesitate to contact us – we're
            committed to helping you look and feel your best!
          </p>
        </section>
        {/* contact info section  */}
        <section
          className={`${sectionStyle}`}
          style={shadowStyle}
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold flex items-center">
          <FaPhone
              className="w-6 h-6 text-teal-900 mr-2"
              aria-hidden="true"
            />
            Contact Information
          </h2>
          <p className="mt-4 leading-relaxed">
            <strong className="text-teal-900">Phone:</strong> +1 (555) 123-4567
          </p>
          <p className="mt-2 leading-relaxed">
            <strong className="text-teal-900">Email:</strong>{" "}
            <a href="mailto:support@glamglow.com" className="text-blue-600">
              support@glamglow.com
            </a>
          </p>
          <p className="mt-2 leading-relaxed">
            <strong className="text-teal-900">Operating Hours:</strong> Monday - Friday: 9 AM - 6 PM
          </p>
        </section>
        {/* social media links  */}
        <section
          className={`${sectionStyle}`}
          style={shadowStyle}
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold flex items-center">
          <FaShareAlt
              className="w-6 h-6 text-teal-900 mr-2"
              aria-hidden="true"
            />
            Follow Us</h2>
          <p className="mt-4 leading-relaxed">
            Connect with us on our social media platforms for the latest
            updates, industry insights, and exclusive promotions. Stay engaged
            and be part of our growing community.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size="25"
                className="text-blue-600 hover:text-blue-700"
              />
            </Link>

            <Link
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size="25"
                className="text-pink-600 hover:text-pink-700"
              />
            </Link>

            <Link
              href="https://www.twitter.com/"
              target="_blank"
              aria-label="Twitter"
              rel="noopener noreferrer"
            >
              <FaTwitter
                size="25"
                className="text-blue-200 hover:text-blue-300"
              />
            </Link>

            <Link
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
            >
              <FaPinterest
                size="24"
                className="text-red-600 hover:text-red-700"
              />
            </Link>
          </div>
        </section>
        {/* contact form section  */}ِ
        <section
          className={`${sectionStyle}`}
          style={shadowStyle}
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold flex items-center">
          <FaCommentAlt
              className="w-6 h-6 text-teal-900 mr-2"
              aria-hidden="true"
            />
            Get in Touch</h2>
          <form>
            <label className="block mb-6 mt-4">
              <span className="text-teal-900">
                <b>Name:</b>
              </span>
              <input
                type="text"
                required
                className={`${inputClass}`}
              />
            </label>

            <label className="block mb-6">
              <span className="text-teal-900">
                <b>Email:</b>
              </span>
              <input
                type="email"
                required
                className={`${inputClass}`}
              />
            </label>

            <label className="block mb-6">
              <span className="text-teal-900">
                <b>Phone:</b>
              </span>
              <input
                type="tel"
                className={`${inputClass}`}
              />
            </label>

            <label className="block mb-6">
              <span className="text-teal-900">
                <b>Subject:</b>
              </span>
              <select className={`${inputClass}`}>
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Feedback</option>
              </select>
            </label>

            <label className="block mb-6">
              <span className="text-teal-900">
                <b>Message:</b>
              </span>
              <textarea
                required
                className={`${inputClass}`}
              ></textarea>
            </label>
            <button
              type="submit"
              className="btn font-bold py-2 rounded-lg w-full"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
// const Contact = () => {
//   // Section styling
//   const sectionStyle =
//     "bg-gray-100 p-6 rounded-lg shadow-md mb-12 transition-shadow duration-300 hover:shadow-lg";

//   // Box shadow for section
//   const shadowStyle = {
//     boxShadow: "0 4px 10px rgba(22, 52, 52)",
//   };
//   return (
//     <div className="bg-white text-gray-800 pt-[180px]">
//         <div className="container mx-auto px-4 py-12 ">
//         <h1 className="text-4xl font-bold mb-8 text-white flex items-center glow-text" data-aos= "fade-right">
//           <FaEnvelope
//             className="w-8 h-8 text-teal-900 mr-2"
//             aria-hidden="true"
//           />
//           Contact Us
//         </h1>
//         <section className={`${sectionStyle}`} style={shadowStyle} data-aos= "fade-up">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4">We're here to help!</h2>
//           <p className="text-gray-600 mt-2">
//             Welcome to <b>Glam Glow!</b> Our team is passionate about delivering
//             exceptional customer experiences. Whether you have a question about
//             our products, need styling advice, or want to share your feedback,
//             we're here to listen. Please don't hesitate to contact us – we're
//             committed to helping you look and feel your best!
//           </p>
//         </section>
//         <section className={`${sectionStyle}`} style={shadowStyle} data-aos= "fade-up">
//         {/* contact info section  */}
//         <div className="container mx-auto bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
//           <p className="mb-2">
//             <strong>Phone:</strong> +1 (555) 123-4567
//           </p>
//           <p className="mb-2">
//             <strong>Email:</strong>{" "}
//             <a href="mailto:support@glamglow.com" className="text-blue-600">
//               support@glamglow.com
//             </a>
//           </p>
//           <p className="mb-8">
//             <strong>Operating Hours:</strong> Monday - Friday: 9 AM - 6 PM
//           </p>
//           </section>
//         </div>
//           {/* social media links  */}

//           <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
//           <div className="flex space-x-4 mt-2">
//             <Link href="https://www.facebook.com/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
//               <FaFacebook size="25" className="text-blue-600 hover:text-blue-700" />
//             </Link>

//             <Link href="https://www.instagram.com/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
//               <FaInstagram size="25" className="text-pink-600 hover:text-pink-700"/>
//             </Link>

//             <Link href="https://www.twitter.com/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
//               <FaTwitter size="25" className="text-blue-200 hover:text-blue-300" />
//             </Link>
//           </div>
//         </div>
//       </section>
//       {/* contact form section  */}
//       <section className="mb-12">
//         <div className="form container mx-auto shadow-md rounded-lg p-6">
//           <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
//           <form>
//             <label className="block mb-6">
//               <span className="text-white"><b>Name:</b></span>
//               <input
//                 type="text"
//                 required
//                 className="mt-1 block w-full border rounded-lg p-2"
//               />
//             </label>

//             <label className="block mb-6">
//               <span className="text-white"><b>Email:</b></span>
//               <input
//                 type="email"
//                 required
//                 className="mt-1 block w-full border rounded-lg p-2"
//               />
//             </label>

//             <label className="block mb-6">
//               <span className="text-white"><b>Phone:</b></span>
//               <input
//                 type="tel"
//                 className="mt-1 block w-full border rounded-lg p-2"
//               />
//             </label>

//             <label className="block mb-6">
//               <span className="text-white"><b>Subject:</b></span>
//               <select className="mt-1 block w-full text-black border rounded-lg p-2">
//                 <option>General Inquiry</option>
//                 <option>Support</option>
//                 <option>Feedback</option>
//               </select>
//             </label>

//             <label className="block mb-6">
//               <span className="text-white"><b>Message:</b></span>
//               <textarea
//                 required
//                 className="mt-1 block w-full border rounded-lg p-2 h-32"
//               ></textarea>
//             </label>

//             <button type="submit" className="btn font-bold py-2 rounded-lg w-full">
//               Submit
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;
