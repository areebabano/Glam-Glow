import Link from "next/link";
import React from "react";
import { BiCategory } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaHome,
  FaPhoneAlt,
  FaBlog,
  FaInfoCircle,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer py-10 max-w-7xl mx-auto font-serif">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Info */}
          <div className="">
            <h3 className="text-2xl font-bold mb-4">Glam Glow</h3>
            <p className="text-sm">
              Welcome to <b>Glam Glow!</b> Discover our exclusive range of
              stylish clothing and accessories for both men and women. Shop now
              to elevate your look with our premium products.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:ml-24">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 grid grid-cols-2 sm:grid-cols-1">
              <li>
                <Link className="relative flex items-center space-x-2" href="/">
                  <FaHome size={20} />
                  <span>
                    <b>
                      <i>Home</i>
                    </b>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="relative flex items-center space-x-2"
                  href="/categories"
                >
                  <BiCategory size={20} />
                  <span>
                    <b>
                      <i>Categories</i>
                    </b>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="relative flex items-center space-x-2"
                  href="/blog"
                >
                  <FaBlog size={20} />
                  <span>
                    <b>
                      <i>Blog</i>
                    </b>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="relative flex items-center space-x-2"
                  href="/about"
                >
                  <FaInfoCircle size={20} />
                  <span>
                    <b>
                      <i>About</i>
                    </b>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="relative flex items-center space-x-2"
                  href="/contact"
                >
                  <FaPhoneAlt size={20} />
                  <span>
                    <b>
                      <i>Contact</i>
                    </b>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="">
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="text-sm mb-2">Email: support@glamglow.com</p>
            <p className="text-sm">Phone: +1 (234) 567-890</p>
            <div className="flex space-x-4 mt-4 mb-6">
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook
                  size="24"
                  className="text-blue-600 hover:text-blue-700"
                />
              </Link>

              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram
                  size="24"
                  className="text-pink-600 hover:text-pink-700"
                />
              </Link>

              <Link
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter
                  size="24"
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
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Glam Glow All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

