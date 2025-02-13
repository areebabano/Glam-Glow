"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import { FaHome, FaBlog, FaPhoneAlt, FaInfoCircle, FaUserCircle } from "react-icons/fa";
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
import { signIn, signOut, useSession } from "next-auth/react";
import UserMenu from "./UserMenu";

const Header: React.FC = () => {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleUserIconClick = () => {
    if (!session) {
      signIn(); // If user is not logged in, redirect to sign in
    } else {
      setDropdownOpen(!dropdownOpen); // Else, toggle dropdown
    }
  };


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
      {/* Logo, Search Bar, and Hamburger Button Container */}
      <div className="flex items-center justify-between py-4 mx-5">
        {/* Logo (Mobile-left alignment) */}
        <Link href="/" className="flex justify-center items-center lg:mr-auto sm:ml-0">
          <Image
            src="/glam glow.jpg"
            alt="Glam Glow"
            width={120}
            height={120}
            className="object-cover rounded-full"
          />
        </Link>
  
        {/* Centered Search Bar and Hamburger Menu */}
        <div className="flex justify-center items-center space-x-4 w-full">
          {/* Search Bar */}
          <SearchBar />
  
          {/* Hamburger Menu Icon */}
          <button
            onClick={toggleHamburger}
            className="text-white lg:hidden"
            aria-label="Menu"
          >
            <RxHamburgerMenu className="text-white mr-5" size={25} />
          </button>
        </div>
  
        {/* Icons Section (Desktop only) */}
        <div className="hidden lg:flex gap-6 text-white text-[35px] space-x-2 pr-14">
          {/* <BiUser /> */}
          <UserMenu/>
          {/* <button onClick={handleUserIconClick} className="flex items-center">
          {session?.user?.image ? (
            <Image
              src={userImage}
              alt="User"
              width={110}
              height={110}
              className="rounded-full border border-white"
            />
          ) : (
            <FaUserCircle className="w-10 h-10" />
          )}
        </button> */}

        {/* Dropdown Menu
        {dropdownOpen && session && (
          <div className="absolute top-full right-0 mt-2 w-40 bg-white text-black rounded shadow-md">
            <p className="px-4 py-2 text-gray-700 border-b">{userName}</p>
            <button
              onClick={() => signOut()}
              className="w-full text-left px-4 py-2 hover:bg-gray-200"
            >
              Logout
            </button>
          </div>
        )} */}
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
    <FavouriteModal isOpen={isFavouriteModalOpen} onClose={closeFavouriteModal} />
  </header>
  

  );
};

export default Header;
