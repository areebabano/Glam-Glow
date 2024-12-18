// "use client"
// import { useParams } from 'next/navigation';
// import React from 'react';
// import Image from 'next/image';
// import { categories } from '@/app/Data/product';
// import { AiFillStar,AiOutlineStar } from 'react-icons/ai';

// const CategoryDetailPage = () => {
//   const { name } = useParams();
//   const category = categories.find(cat => cat.name === name);

//   if (!category) {
//     return <p>Category not found</p>;
//   }
//   const genrateRating = (rating: number) => {
//     switch (rating) {
//       case 1:
//         return (
//           <div className="flex gap-1 text-[20px] text-[#FF9529]">
//             <AiFillStar />
//             <AiOutlineStar />
//             <AiOutlineStar />
//             <AiOutlineStar />
//             <AiOutlineStar />
//           </div>
//         );
//       case 2:
//         return (
//           <div className="flex gap-1 text-[20px] text-[#FF9529]">
//             <AiFillStar />
//             <AiFillStar />
//             <AiOutlineStar />
//             <AiOutlineStar />
//             <AiOutlineStar />
//           </div>
//         );
//       case 3:
//         return (
//           <div className="flex gap-1 text-[20px] text-[#FF9529]">
//             <AiFillStar />
//             <AiFillStar />
//             <AiFillStar />
//             <AiOutlineStar />
//             <AiOutlineStar />
//           </div>
//         );
//       case 4:
//         return (
//           <div className="flex gap-1 text-[20px] text-[#FF9529]">
//             <AiFillStar />
//             <AiFillStar />
//             <AiFillStar />
//             <AiFillStar />
//             <AiOutlineStar />
//           </div>
//         );
//       case 5:
//         return (
//           <div className="flex gap-1 text-[20px] text-[#FF9529]">
//             <AiFillStar />
//             <AiFillStar />
//             <AiFillStar />
//             <AiFillStar />
//             <AiFillStar />
//           </div>
//         );

//       default:
//         return null;
//     }
//   };
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">{name} Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {category.products.map((product, index) => (
//           <div key={index} className="border-2 shadow-md container px-4 py-12 border-gray-200 rounded-xl max-w-[400px]">
//             <div>
//             <Image
//               src={product.img}
//               alt={product.title}
//               width={200}
//               height={300}
//               className="w-full h-auto h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-md mb-4"
//             />
//             </div>
//             <div className="p-2">
//               <h2 className="text-lg font-bold">{product.title}</h2>
//               <p className="text-gray-500 max-w-[150px]">{product.description}</p>
//         <div>{genrateRating(product.rating)}</div>
//         <div className="font-bold flex gap-4">
//             ${product.price}
//             <del className="text-gray-500 font-normal">${product.price + 15}.00</del>
//         </div>
//               {/* <p className="text-gray-700">{product.price}</p> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryDetailPage;


"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { categories } from '@/src/app/Data/product';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const CategoryDetailPage = () => {
  const params = useParams();
  const categoryName = params.name;
  const category = categories.find(cat => cat.name === categoryName);

  if (!category) {
    return <p>Category not found</p>;
  }

  const genrateRating = (rating: number) => {
    const stars = Array(5)
      .fill(0)
      .map((_, i) =>
        i < rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
      );
    return <div className="flex gap-1 text-[20px] text-[#FF9529]">{stars}</div>;
  };

  return (
    <div className="p-4 font-serif">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-500 ">Curated <span className='text-white fade-in-out glow-text'>{categoryName}</span> Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-auto max-w-screen-lg">
        {category.products.map((product, index) => (
          <div key={index} className="border-2 shadow-md hover:scale-95 transition duration-200 ease-in-out container px-4 py-4 border-gray-200 rounded-xl max-w-[400px]">
            {/* <div> */}
            <Link href={`/product/${product.id}`}>
              <Image
                src={product.img}
                alt={product.title}
                layout='responsive'
                width={200}
                height={300}
                className="w-full h-auto h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-md mb-4"
              />
              </Link>
            {/* </div> */}
            <div className="space-y-2 py-2">
              <h2 className="text-lg text-balck font-bold">{product.title}</h2>
              {/* <p className="text-gray-500 max-w-[150px]">{product.description}</p> */}
              <div>{genrateRating(product.rating)}</div>
              <div className="font-bold flex gap-4">
                ${product.price}
                <del className="text-gray-500 font-normal">${(product.price + 15).toFixed(2)}</del>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetailPage;
