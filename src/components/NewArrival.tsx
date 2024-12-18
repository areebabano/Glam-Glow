import React from 'react';
import Link from 'next/link';
import { newArrival } from '../app/Data/newarrival';
import ProductCard from './ProductCard';

const NewProducts: React.FC = () => {
  return (
    <div>
      <div className='container pt-16 font-serif'>
        <h1 className='font-bold text-4xl text-center pb-6 text-teal-900 '>
          {/* <b>NEW ARRIVAL</b> */}
         <span className='text-white glow-text'> New Arrivals: </span> 
         <span className='text-gray-500 fade-in-out'>Latest Trends for You</span>
        </h1>
        <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 sm:place-items-start md:grid-cols-4 lg:grid-cols-4 gap-4 xl:gap-x-20 xl:gap-y-10 ml-10 mb-10'>
          {newArrival.map((item) => (
            <Link href={`/newarrival/${item.id}`} key={item.id}>
              <ProductCard
                img={item.img}
                title={item.title}
                description={item.description}
                rating={item.rating}
                price={item.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;


// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// // import { Product } from '../types/types'
// // import { productList } from '../Data/product'
// // import ProductCard from './ProductCard'
// import { Product } from "../types/types"
// import ProductDetailsPage from '../product/[id]/page'
// import { newArrival } from '../Data/newarrival'
// import ProductCard from './ProductCard'

// const NewProducts: React.FC = () => {
     
//   return (
//     <div>
//       <div className='container pt-16'>
//         <h2 className='font-medium text-2xl pb-4 ml-10'>
//             <b>NEW ARRIVAL</b>
//         </h2>

// <div className='grid grid-cols-1 place-items-center sm:place-items-start md:grid-cols-2 
// lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 ml-10'>
//     {newArrival.map((item) => 
//        <ProductCard
//          key={item.id}
//          img={item.img}
//          title={item.title}
//          description={item.description}
//          rating={item.rating}
//          price={item.price} 
//        />
//     )}
// </div>


//       </div>
//     </div>
//   )
// }

// export default NewProducts







// export const productList: Product[] = [
//     {
//      id: 1,
//      img: "/jacket.jpg",
//      title: "Jacket",
//      description: "Stylish women's jacket for winter.",
//      rating: 5,
//      price: 79.99
//     },
//     {
//         id: 2,
//         img: "/shoes.jpg",
//         title: "Shoes",
//         description: "Men's casual shoes for a relaxed and stylish look",
//         rating: 3,
//         price: 70.85
//     },
//     {
//         id: 3,
//         img: "/watch.jpg",
//         title: "Watch",
//         description: "Elevate your style with our sleek and accurate watch",
//         rating: 4,
//         price: 150.00
//     },
//     {
//         id: 4,
//         img: "/shirt.jpg",
//         title: "Shirt",
//         description: "High-quality formal shirt with a comfortable fit and stylish design",
//         rating: 3,
//         price: 40.99
//     },
//     {
//         id: 5,
//         img: "/glasses.jpg",
//         title: "SunGlasses",
//         description: "Stylish and protective sunglasses for outdoor activities",
//         rating: 4,
//         price: 44.95
//     },
//     {
//         id: 6,
//         img: "/handbag.jpg",
//         title: "Hand Bag",
//         description: "Elegant and versatile handbag with premium quality material, perfect for work & travel",
//         rating: 5,
//         price: 89.99
//     },
//     {
//         id: 7,
//         img: "/butterfly.jpg",
//         title: "Butterfly Pendant",
//         description: "Add a touch of elegance to your outfit with this stunning butterfly pendant",
//         rating: 3,
//         price: 15
//     },
//     {
//         id: 8,
//         img: "/track.jpg",
//         title: "Men's Tracksuit Set",
//         description: "Comfortable and stylish tracksuit set for men, perfect for casual wear",
//         rating: 5,
//         price: 199.99
//     },
//     {
//         id: 9,
//         img: "/cap.jpg",
//         title: "Couple Cap Set",
//         description: "Stylish and comfortable couple cap set, perfect for couples",
//         rating: 3,
//         price: 39.99
//     },
// ] 


