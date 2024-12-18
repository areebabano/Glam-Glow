import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className='footer py-10 max-w-7xl mx-auto font-serif'>
      <div className='container mx-auto px-4'>
        {/* Top Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
        
          {/* Brand Info */}
          <div className=''>
            <h3 className='text-2xl font-bold mb-4'>Glam Glow</h3>
            <p className='text-sm'>
              Welcome to <b>Glam Glow!</b> Discover our exclusive range of stylish clothing and accessories for both men and women. Shop now to elevate your look with our premium products.
            </p>
          </div>

          {/* Navigation Links */}
          <div className='ml-24'>
            <h4 className='text-xl font-bold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li><Link href="/" className='font-bold'><i>Home</i></Link></li>
              <li><Link href="/categories" className='font-bold'><i>Categories</i></Link></li>
              <li><Link href="/blog" className='font-bold'><i>Blog</i></Link></li>
              <li><Link href="/about" className='font-bold'><i>About</i></Link></li>
              <li><Link href="/contact" className='font-bold'><i>Contact</i></Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className=''>
            <h4 className='text-xl font-bold mb-4'>Contact Us</h4>
            <p className='text-sm mb-2'>Email: support@glamglow.com</p>
            <p className="text-sm">Phone: +1 (234) 567-890</p>
            <div className="flex space-x-4 mt-4 mb-6">
              <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label='Facebook'>
                <FaFacebook size="24" className="text-blue-600 hover:text-blue-700" />
              </Link>

              <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label='Instagram'>
                <FaInstagram size="24" className="text-pink-600 hover:text-pink-700" />
              </Link>

              <Link href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label='Twitter'>
                <FaTwitter size="24" className="text-blue-200 hover:text-blue-300" />
              </Link>

              <Link href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" aria-label='Pinterest'>
                <FaPinterest size="24" className="text-red-600 hover:text-red-700" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-700 pt-4 text-center'>
          <p className='text-sm'>&copy; {new Date().getFullYear()} Glam Glow All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
















// // components/Footer.js
// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-200 text-gray-700 py-12">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-between">
//           <div className="w-full md:w-1/2 xl:w-1/3 p-6">
//             <h3 className="text-lg font-semibold">Navigation</h3>
//             <ul className="list-unstyled">
//               <li>
//                 <Link href="/" className="text-gray-700 hover:text-gray-900">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/categories" className="text-gray-700 hover:text-gray-900">
//                   Categories
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/men" className="text-gray-700 hover:text-gray-900">
//                   Men
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/women" className="text-gray-700 hover:text-gray-900">
//                   Women
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/blog" className="text-gray-700 hover:text-gray-900">
//                   Blog
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="text-gray-700 hover:text-gray-900">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="text-gray-700 hover:text-gray-900">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/2 xl:w-1/3 p-6">
//             <h3 className="text-lg font-semibold">Contact Us</h3>
//             <p className="text-gray-700">Address: 123 Main St, Anytown, USA</p>
//             <p className="text-gray-700">Phone: 555-555-5555</p>
//             <p className="text-gray-700">Email: <a href="mailto:info@example.com">info@example.com</a></p>
//           </div>
//           <div className="w-full md:w-1/2 xl:w-1/3 p-6">
//             <h3 className="text-lg font-semibold">Follow Us</h3>
//             <ul className="list-unstyled">
//               <li>
//                 <a href="#" className="text-gray-700 hover:text-gray-900">Facebook</a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-700 hover:text-gray-900">Twitter</a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-700 hover:text-gray-900">Instagram</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




// import React from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-10">
//       <div className="container mx-auto px-4">
//         {/* Top Section: Brand Info and Navigation Links */}
//         <div className="flex flex-wrap justify-between mb-8">
//           {/* Brand Info */}
//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h3 className="text-2xl font-bold mb-2">Glam Glow</h3>
//             <p className="text-sm">
//               Glam Glow offers a wide range of beauty and skincare products for men and women. Discover the best products for your glow.
//             </p>
//           </div>

//           {/* Navigation Links */}
//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-gray-400">Home</a></li>
//               <li><a href="#" className="hover:text-gray-400">Categories</a></li>
//               <li><a href="#" className="hover:text-gray-400">Men</a></li>
//               <li><a href="#" className="hover:text-gray-400">Women</a></li>
//               <li><a href="#" className="hover:text-gray-400">Blog</a></li>
//               <li><a href="#" className="hover:text-gray-400">About</a></li>
//               <li><a href="#" className="hover:text-gray-400">Contact</a></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="w-full md:w-1/3">
//             <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
//             <p className="text-sm mb-2">Email: support@glamglow.com</p>
//             <p className="text-sm">Phone: +1 (234) 567-890</p>
//             <div className="flex space-x-4 mt-4">
//               <a href="#" className="text-white hover:text-gray-400"><FaFacebookF /></a>
//               <a href="#" className="text-white hover:text-gray-400"><FaTwitter /></a>
//               <a href="#" className="text-white hover:text-gray-400"><FaInstagram /></a>
//               <a href="#" className="text-white hover:text-gray-400"><FaPinterestP /></a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section: Copyright */}
//         <div className="border-t border-gray-700 pt-4 text-center">
//           <p className="text-sm">&copy; 2024 Glam Glow. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


























// import React from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto px-4">
//         {/* Upper Section */}
//         <div className="flex flex-wrap justify-between items-center mb-6">
//           {/* Logo and Description */}
//           <div className="w-full md:w-1/3 mb-4 md:mb-0">
//             <h3 className="text-2xl font-bold mb-2">Your Brand</h3>
//             <p className="text-sm">Providing quality products and services since 2024.</p>
//           </div>

//           {/* Navigation Links */}
//           <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-gray-400">Home</a></li>
//               <li><a href="#" className="hover:text-gray-400">About Us</a></li>
//               <li><a href="#" className="hover:text-gray-400">Services</a></li>
//               <li><a href="#" className="hover:text-gray-400">Contact</a></li>
//             </ul>
//           </div>

//           {/* Social Media Links */}
//           <div className="w-full md:w-1/3 flex justify-center md:justify-end">
//             <ul className="flex space-x-4">
//               <li>
//                 <a href="#" className="hover:text-gray-400">
//                   <FaFacebookF />
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-400">
//                   <FaTwitter />
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-400">
//                   <FaInstagram />
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-400">
//                   <FaLinkedinIn />
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Lower Section */}
//         <div className="border-t border-gray-700 pt-4 text-center">
//           <p className="text-sm">&copy; 2024 Your Brand. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


