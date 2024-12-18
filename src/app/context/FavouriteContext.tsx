"use client"

import { createContext, useContext, useState, ReactNode } from "react";
import { favouriteProduct , favouriteContextType, Product } from "../types/types";

const FavouriteContext = createContext<favouriteContextType | undefined> (undefined);

export const useFavourite = () => {
    const context = useContext(FavouriteContext);
    if(!context){
        throw new Error("useFavourite must be within a favouriteProvider")
    }
    return context;
}

export const FavouriteProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [favourites, setFavourites] = useState<favouriteProduct[]>([]);

    const addToFavourites = (product: Product) => {
        const favouriteProducts: favouriteProduct = {
            ...product,
            favouritedAt: new Date(), // Add timeStamp
        };
        setFavourites((prevFavourites) => [...prevFavourites, favouriteProducts])
    }

 const removeFromFavourites = (id: number) => {
        setFavourites((prevFavourites) => prevFavourites.filter((product) => product.id !== id));
    }
    

    return(
        <FavouriteContext.Provider value={{favourites, addToFavourites, removeFromFavourites}}>
            {children}
        </FavouriteContext.Provider>
    )
}