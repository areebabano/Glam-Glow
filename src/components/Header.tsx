"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import { FaHome, FaBlog, FaPhoneAlt, FaInfoCircle } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";
import FavouriteModal from "./FavouriteModal";
import SearchBar from "./SearchBar";
import { useCart } from "../app/context/CartContext";
import { useFavourite } from "../app/context/FavouriteContext";
import { Product } from "../app/types/types";
import { categories } from "../app/Data/product";
import { newArrival } from "../app/Data/newarrival";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Header: React.FC = () => {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleSearchBar = () => setIsSearchOpen(!isSearchOpen);
  const toggleHamburger = () => setIsHamburgerOpen(!isHamburgerOpen);

  const { cart, getCartItemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavouriteModalOpen, setFavouriteModalOpen] = useState(false);
  const { favourites } = useFavourite();

  const handleSearch = (query: string) => {
    const allProducts: Product[] = [
      ...categories.flatMap((category) => category.products),
      ...newArrival,
    ];

    const filtered = allProducts.filter((product) =>
      product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );

    if (filtered.length > 0) {
      router.push(`/product/${filtered[0].id}`);
    }
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const openFavouriteModal = () => setFavouriteModalOpen(true);
  const closeFavouriteModal = () => setFavouriteModalOpen(false);

  return (
    <header className="fixed top-0 w-full shadow-md z-50 font-serif">
      {/* Container to Center Content */}
      <div className="max-w-7xl mx-auto">
        {/* Logo and Hamburger Button */}
        <div className="flex items-center justify-between py-4 ml-10">
          <Link href="/">
            <Image
              src="/glam glow.jpg"
              alt="Glam Glow"
              width={120}
              height={120}
              className="object-cover rounded-full"
            />
          </Link>
          <div className="flex items-center space-x-4">
            {/* Search Icon (only on mobile) */}
            <button
              onClick={toggleSearchBar}
              className="lg:hidden"
              aria-label="Search"
            >
              <BsSearch className="text-white mr-5 ml-1" size={20} />
            </button>

            {/* Hamburger Menu Icon */}
            <button
              onClick={toggleHamburger}
              className="text-white lg:hidden"
              aria-label="Menu"
            >
              <RxHamburgerMenu className="text-white mr-5" size={25} />
            </button>

            {/* Mobile Search Bar (only visible when isSearchOpen is true) */}
            {isSearchOpen && (
              <div className="lg:hidden w-full max-w-xs mx-auto">
                <SearchBar />
              </div>
            )}

            {/* Desktop Search Bar */}
            <div className="hidden lg:block w-[700px] pr-8">
              <SearchBar />
            </div>

            {/* Icons Section (Desktop only) */}
            <div className="hidden lg:flex gap-6 text-white text-[35px] space-x-2 pr-14">
              <BiUser />

              {/* Heart Icon */}
              <div className="relative">
                <FiHeart onClick={openFavouriteModal} className="cursor-pointer" />
                <span className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1">
                  {favourites.length}
                </span>
              </div>

              {/* Shopping Cart Icon */}
              <div className="relative">
                <GrCart onClick={openCart} />
                <span className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1">
                  {getCartItemCount()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger Menu (Right Sidebar) */}
        <div
          className={`fixed top-0 right-0 w-72 h-full bg-white shadow-xl z-50 transform ${
            isHamburgerOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          {/* Close Button at Top Right */}
          <button
            onClick={toggleHamburger}
            className="text-red-700 text-[20px] absolute top-4 right-4"
            aria-label="Close Menu"
          >
            <IoClose />
          </button>

          {/* Scrollable Navigation Links */}
          <div className="flex flex-col items-start gap-4 px-6 py-8 overflow-y-auto font-serif h-full">
            <Link href="/" className="navbar__link relative flex items-center text-gray-800 text-md space-x-2">
              <FaHome size={20} />
              <span><b><i>Home</i></b></span>
            </Link>
            <Link href="/categories" className="navbar__link relative flex items-center text-gray-800 text-md space-x-2">
              <BiCategory size={20} />
              <span><b><i>Categories</i></b></span>
            </Link>
            <Link href="/blog" className="navbar__link relative flex items-center text-gray-800 text-md space-x-2">
              <FaBlog size={20} />
              <span><b><i>Blog</i></b></span>
            </Link>
            <Link href="/about" className="navbar__link relative flex items-center text-gray-800 text-md space-x-2">
              <FaInfoCircle size={20} />
              <span><b><i>About</i></b></span>
            </Link>
            <Link href="/contact" className="navbar__link relative flex items-center text-gray-800 text-md space-x-2">
              <FaPhoneAlt size={20} />
              <span><b><i>Contact</i></b></span>
            </Link>
            <div className="flex gap-6 text-black text-[30px] mt-4 mb-8">
              <BiUser />
              <div className="relative">
                <FiHeart onClick={openFavouriteModal} className="cursor-pointer" />
                <span className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1">
                  {favourites.length}
                </span>
              </div>
              <div className="relative">
                <GrCart onClick={openCart} />
                <span className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1">
                  {getCartItemCount()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex justify-center py-4 gap-8 bg-white border-b border-teal-950 font-serif font-extrabold">
          <Link className="navbar__link relative flex items-center space-x-2" href="/">
            <FaHome size={20} />
            <span><b><i>Home</i></b></span>
          </Link>
          <Link className="navbar__link relative flex items-center space-x-2" href="/categories">
            <BiCategory size={20} />
            <span><b><i>Categories</i></b></span>
          </Link>
          <Link className="navbar__link relative flex items-center space-x-2" href="/blog">
            <FaBlog size={20} />
            <span><b><i>Blog</i></b></span>
          </Link>
          <Link className="navbar__link relative flex items-center space-x-2" href="/about">
            <FaInfoCircle size={20} />
            <span><b><i>About</i></b></span>
          </Link>
          <Link className="navbar__link relative flex items-center space-x-2" href="/contact">
            <FaPhoneAlt size={20} />
            <span><b><i>Contact</i></b></span>
          </Link>
        </div>
      </div>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={closeCart} />

      {/* Favourite Modal */}
      <FavouriteModal
        isOpen={isFavouriteModalOpen}
        onClose={closeFavouriteModal}
      />
    </header>
  );
};

export default Header;

``



// "use client"
// import React, {useState} from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { BsSearch } from "react-icons/bs";
// import { FiHeart } from "react-icons/fi";
// import { BiUser } from "react-icons/bi";
// import CartModal from "./CartModal";
// import { useCart } from "../app/context/CartContext";
// import FavouriteModal from "./FavouriteModal";
// import { useFavourite } from "../app/context/FavouriteContext";
// import Navbar from "./Navbar";
// import { GrCart } from "react-icons/gr";
// import SearchBar from "./SearchBar";
// import { categories } from "../app/Data/product";
// import { newArrival } from "../app/Data/newarrival";
// import { Product} from "../app/types/types";
// import { useRouter } from "next/navigation";

// const Header: React.FC = () => {
//   const router = useRouter();
//   const [cartCount, setCartCount] = useState(0)
//   const [favouriteCount, setFavouriteCount] = useState(0)
//   const {cart, getCartItemCount} = useCart();
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isFavouriteModalOpen, setFavouriteModalOpen] = useState(false);
//   const {favourites} = useFavourite();
//   const [filterProducts, setFilterProducts] = useState<Product[]>([]);

//   const handleSearch = (query: string) => {
//     const allProducts: Product[] = [
//       ...categories.flatMap(category => category.products),
//       ...newArrival,
//     ]

//    const filtered = allProducts.filter(product =>
//      product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
//    );

//   if (filtered.length > 0) {
//     router.push(`/product/${filtered[0].id}`);
//   }
//   }

//   const openCart = () => {
//     setIsCartOpen(true);
//   }

//   const closeCart = () => {
//     setIsCartOpen(false);
//   }

//   const openFavouriteModal = () => {
//     setFavouriteModalOpen(true);
//   }

//   const closeFavouriteModal = () => {
//     setFavouriteModalOpen(false);
//   }

//   return (
//     // यहाँ हमने hidden lg:flex ऐड किया है जो मोबाइल पर हाइड करेगा और लार्ज स्क्रीन पर दिखाएगा
//     <header className="hidden lg:flex items-center justify-between flex-wrap fixed top-0 left-0 w-full z-10 bg-teal-940">
//       {/* Logo */}
//       <div className="w-full sm:w-auto mb-4 sm:mb-0 flex justify-center">
//         <Link href="/">
//           <Image
//             src="/glam glow.jpg"
//             alt="Glam Glow"
//             width={120}
//             height={120}
//             className="object-cover rounded-full"
//           />
//         </Link>
//       </div>

//       {/* Search bar */}
//       <SearchBar/>

//       {/* Icons Section */}
//       <div className="flex gap-6 text-white text-[30px] mr-10 space-x-2">
//         <BiUser/>

//         {/* Heart Icon */}
//         <div className="relative">
//           <FiHeart onClick={openFavouriteModal} className="cursor-pointer"/>
//           <span className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1">
//             {favourites.length}
//           </span>
//         </div>

//         {/* Shopping Cart Icon */}
//         <div className="relative">
//           <GrCart onClick={openCart}/>
//           <span className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1">
//             {getCartItemCount()}
//           </span>
//         </div>
//       </div>

//       {/* Modals */}
//       {isCartOpen && <CartModal isOpen={isCartOpen} onClose={closeCart}/>}
//       {isFavouriteModalOpen && <FavouriteModal isOpen={isFavouriteModalOpen} onClose={closeFavouriteModal} />}
//       <Navbar/>
//     </header>
//   );
// };

// export default Header;

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { BsSearch } from "react-icons/bs";
// import { BiUser } from "react-icons/bi";
// import { FiHeart } from "react-icons/fi";
// import { HiOutlineShoppingBag } from "react-icons/hi2";

// const Header = () => {
//   return (
//     <header className="flex items-center justify-between flex-wrap">
//       {/* Logo */}
//       <div className="w-auto mb-4 sm:mb-0">
//         <Link href="/">
//           <Image
//             src="/my logo.jpg"
//             alt="Glam Glow"
//             width={120}
//             height={120}
//             className="object-cover rounded-full"
//           />
//         </Link>
//       </div>
//       {/* Search bar  */}

//       <div className="w-full relative mb-4 sm:mb-0">
//         <input
//           className="border-gray-200 border p-2 px-4 rounded-lg w-full"
//           type="text"
//           placeholder="Enter product name..."
//         />
//         <BsSearch
//           className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
//           size="20"
//         />
//       </div>
//       {/* User Icon */}

//       <div className="flex gap-4 text-white text-[30px] mr-5 space-x-2">
//         <BiUser />

//         {/* Heart Icon  */}

//       <div className="relative">
//         <FiHeart/>
//         <div  className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1">0</div>
//       </div>

//       {/* Shopping Bag Icon  */}

//       <div className="relative">
//         <HiOutlineShoppingBag/>
//         <div  className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1">0</div>
//       </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { BsSearch } from "react-icons/bs";
// import { BiUser } from "react-icons/bi";
// import { FiHeart } from "react-icons/fi";
// import { HiOutlineShoppingBag } from "react-icons/hi2";

// const Header = () => {
//   return (
//     <header className="flex items-center justify-between flex-wrap">
//       {/* Logo */}
//       <div className="w-full sm:w-auto mb-4 sm:mb-0">
//         <Link href="/">
//           <Image
//             src="/my logo.jpg"
//             alt="Glam Glow"
//             width={120}
//             height={120}
//             className="object-cover rounded-full"
//           />
//         </Link>
//       </div>
//       {/* Search bar */}
//       <div className="w-full sm:w-[300px] md:w-[60%] relative mb-4 sm:mb-0">
//         <input
//           className="border-gray-200 border p-2 px-4 rounded-lg w-full"
//           type="text"
//           placeholder="Enter product name..."
//         />
//         <BsSearch
//           className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
//           size="20"
//         />
//         <button className="absolute right-0 top-0 mr-10 mt-3 bg-gray-200 rounded-lg">
//           Search
//         </button>
//       </div>
//       {/* User Icon */}
//       <div className="flex gap-4 text-white text-[30px] mr-10 space-x-2">
//         <BiUser />
//         {/* Heart Icon */}
//         <div className="relative">
//           <FiHeart />
//           <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1">
//             0
//           </div>
//         </div>
//         {/* Shopping Bag Icon */}
//         <div className="relative">
//           <HiOutlineShoppingBag />
//           <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1">
//             0
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
