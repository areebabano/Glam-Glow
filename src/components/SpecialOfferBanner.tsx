import React from 'react';
import Link from 'next/link';

const SpecialOfferBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-teal-950 via-teal-600 to-white text-white mt-12 font-serif py-10 px-6 md:px-12 rounded-lg shadow-lg mb-2 max-w-7xl mx-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-2">
          ✨ Special Offer – <span className="text-white font-thin">Up to 15% Off!</span>
          </h2>
          <p className="text-lg text-gray-100">
            Shop the latest fashion clothes and accessories for men and women. Don’t miss out!
          </p>
        </div>

        {/* Call-to-Action Button */}
        <div>
          <Link
            href="/categories"
            className="bg-teal-900 text-white px-8 py-4 font-bold rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transition-transform duration-300"
          >
             Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferBanner;

