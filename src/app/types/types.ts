// Define Types for Setting 

import { ReactNode } from "react";

export interface Settings{
        dots: boolean,
        infinite: boolean,
        speed: number,
        slidesToShow: number,
        slidesToScroll: number,
        autoplay: boolean,
        autoplaySpeed: number,
        pauseOnHover: boolean
}

// Define Types for Product 

export interface Product{
    id?: number,
    img: string,
    title: string,
    description: string,
    rating: number,
    price: number,
    name?: string
}

// Define Types for category 
  
export interface Category{
    id?: string,
    name: string;
    image: string;
    products: Product[];
    count: number;
  };

// Define Types for Feedback 
export interface Feedback{
    id: number,
    name: string,
    img: string,
    message: string,
    rating: number,
    designation: string
}

export interface CoustomerCardProps{
    feedback: Feedback
}

// Define Types for Slider Setting 

export interface sliderSetting{
    dots: boolean,
    infinite: boolean,
    speed: number,
    slidesToShow: number,
    slidesToScroll: number,
    autoplay: boolean,
    autoplaySpeed: number,
    pauseOnHover: boolean,
    arrows: boolean
}

// Define Types for CartItem 

export interface CartItem{
    id?: number,
    imageUrl: string,
    description: string,
    title: string,
    price: number,
    quantity: number
}

// Define Types for CartContext 

export interface CartContextType{
    cart: CartItem[],
    addToCart: (items: CartItem) => void,
    removeFromCart: (id: number) => void,
    getCartItemCount: () => number
    updateQuantity: (id: number, quantity: number) => void
}

export interface cartModal{
    isOpen: boolean,
    onClose: () => void
}

// Define Favourite Products Type 

export interface favouriteProduct extends Product {
    favouritedAt?: Date;
  }

// Define Types for FavouriteContext type 

export interface favouriteContextType{
    favourites: favouriteProduct[];
    addToFavourites: (product: favouriteProduct) => void;
    removeFromFavourites: (id: number) => void;
}

export interface favouriteModal{
    isOpen: boolean,
    onClose: () => void
}

// Define Team Members Type

export interface TeamMemberProps{
    name: string,
    role: string,
    img: string,
    bio: string
}

export interface FormData{
    name: string,
    email: string,
    phoneNumber: string,
    address: string,
    city: string,
    postalCode: string,
    country: string,
    cardNumber: string,
    cardExpiry: string,
    cardCVC: string,
}

export interface InputFieldProps {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    error?: string;
    maxLength?: number;
  }

export interface SearchBarProps {
    onSearch: (query: string) => void
}

export interface SearchResultProps{
    searchQuery: string
}

// /app/types/types.ts
export interface Comment {
    id: number;
    name: string;
    content: string;
    date: string;
}

export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    content: string;
    image: string;
    author: string;
    publishDate: string;
    comments: Comment[];
}

export interface Blog {
    id: number;
    slug: string;
    image: string;
    blogger: string;
    date: string;
    title: string;
    description: string;
    content: string;
  }
  
  export interface BlogCategory {
    name: string;
    count: number;
  }

  export interface BlogCardProps {
    blog: Blog;
  }
  
 export interface User {
    id: string;
    email: string;
    password: string;
  }