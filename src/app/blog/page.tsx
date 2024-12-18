import BlogCard from "@/src/components/BlogCard";
import Sidebar from "@/src/components/SideBar";
import { blogs } from "@/src/app/Data/blogData";
import { FaBlog } from "react-icons/fa";

const BlogPage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 px-14 max-w-7xl mx-auto font-serif">
      {/* Blog Section */}
      <main className="flex-1">
        <header className="mb-8 bg-white">
          <h1 className="text-4xl font-bold mb-4 text-white flex items-center glow-text" data-aos="fade-right">
            <FaBlog className="w-8 h-8 text-teal-900 mr-2" aria-hidden="true" />
            Latest Fashion Blog Posts
          </h1>
          <p className="mt-2 text-md text-gray-500" data-aos="fade-up">
            Stay updated with the latest trends, tips, and insights from the world of fashion.
          </p>
        </header>

        {/* Render Blog Cards */}
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </main>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
};

export default BlogPage;



// import BlogCard from "@/src/components/BlogCard";
// import Sidebar from "@/src/components/SideBar";
// import { blogs } from "@/src/app/Data/blogData";

// const BlogPage = () => {
//   return (
//     <div className="flex flex-col lg:flex-row gap-8 p-8">
//       {/* Blog Section */}
//       <main className="flex-1">
//         {blogs.map((blog) => (
//           <BlogCard key={blog.id} blog={blog} />
//         ))}
//       </main>

//       {/* Sidebar */}
//       <Sidebar />
//     </div>
//   );
// };

// export default BlogPage;


// // app/blog/page.tsx
// import Link from "next/link";

// const BlogPage = () => {
//   return (
//     <div className="max-w-7xl mx-auto p-4 pt-[280px]">
//       <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
//       <ul>
//         <li>
//           <Link href="/blog/summer-trends-2024" className="text-blue-600 hover:underline">
//             Summer Trends 2024
//           </Link>
//         </li>
//         <li>
//           <Link href="/blog/winter-fashion-essentials" className="text-blue-600 hover:underline">
//             Winter Fashion Essentials
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default BlogPage;


// import Link from 'next/link';
// import Image from 'next/image';

// const blogs = [
//   {
//     id: 1,
//     title: 'Summer Trends 2024',
//     slug: 'summer-trends-2024',
//     imageUrl: '/images/summer-trends-2024.jpg',
//   },
//   {
//     id: 2,
//     title: 'Winter Fashion Essentials',
//     slug: 'winter-fashion-essentials',
//     imageUrl: '/images/winter-fashion-essentials.jpg',
//   },
// ];

// export default function Blog() {
//   return (
//     <div className="max-w-4xl mx-auto pt-[280px] px-4">
//       <h2 className="text-4xl font-extrabold mb-8 text-gray-800">
//         Welcome to the Fashion Blog!
//       </h2>
//       <div className="grid gap-6 md:grid-cols-2">
//         {blogs.map((blog) => (
//           <Link
//             key={blog.id}
//             href={`/blog/${blog.slug}`}
//             className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
//           >
//             <div className="relative h-48">
//               <Image
//                 src={blog.imageUrl}
//                 alt={blog.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="text-2xl font-semibold text-gray-700 mb-2">
//                 {blog.title}
//               </h3>
//               <p className="text-gray-500">Click to read more...</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }


// // /app/blog/page.tsx
// import { blogPosts } from "@/src/app/Data/blogpost";
// import Link from "next/link";
// import Image from "next/image";
// import CommentSection from "@/src/components/CommentSection";

// const BlogPage: React.FC = () => (
//     <div className="max-w-7xl mx-auto pt-[220px] px-6 sm:px-16">
//         <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight mb-10">Blog</h1>
//         <div className="space-y-12">
//             {blogPosts.map((post) => (
//                 <div key={post.id} className="bg-white border border-gray-200 p-8 rounded-lg shadow-md hover:shadow-xl transition-all">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                         {/* Content on the Left */}
//                         <div className="space-y-4">
//                             <h2 className="text-4xl font-semibold text-gray-900">{post.title}</h2>
//                             <p className="text-gray-500 text-lg">
//                                 By {post.author} on {post.publishDate}
//                             </p>
//                             <p className="mt-4 text-lg text-gray-700">
//                                 {post.content.slice(0, 200)}...
//                             </p>
//                             <Link href={`/blog/${post.slug}`} className="inline-block mt-6 text-blue-600 font-semibold hover:underline">
//                                 Read More
//                             </Link>
//                         </div>

//                         {/* Image on the Right */}
//                         <div className="relative">
//                             <Image
//                                 src={post.image}
//                                 alt={post.title}
//                                 width={1200}
//                                 height={675}
//                                 layout="responsive"
//                                 className="rounded-lg object-cover"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
// );

// export default BlogPage;


// // /app/blog/page.tsx
// import { blogPosts } from "@/src/app/Data/blogpost";
// import Link from "next/link";
// import Image from "next/image";

// const BlogPage: React.FC = () => (
//     <div className="max-w-7xl mx-auto pt-[220px] px-6 sm:px-16">
//         <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight mb-10">Blog</h1>
//         <div className="space-y-12">
//             {blogPosts.map((post) => (
//                 <div key={post.id} className="bg-white border border-gray-200 p-8 rounded-lg shadow-md hover:shadow-xl transition-all">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                         {/* Content on the Left */}
//                         <div className="space-y-4">
//                             <h2 className="text-4xl font-semibold text-gray-900">{post.title}</h2>
//                             <p className="text-gray-500 text-lg">
//                                 By {post.author} on {post.publishDate}
//                             </p>
//                             <p className="mt-4 text-lg text-gray-700">
//                                 {post.content.slice(0, 200)}...
//                             </p>
//                             <Link href={`/blog/${post.slug}`} className="inline-block mt-6 text-blue-600 font-semibold hover:underline">
//                                 Read More
//                             </Link>
//                         </div>

//                         {/* Image on the Right */}
//                         <div className="relative">
//                             <Image
//                                 src={post.image}
//                                 alt={post.title}
//                                 width={1200} // Set a large width for the image
//                                 height={675} // Corresponds to the 16:9 aspect ratio
//                                 layout="responsive"
//                                 className="rounded-lg object-cover"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
// );

// export default BlogPage;

// // /app/blog/page.tsx
// import { blogPosts } from "@/src/app/Data/blogpost";
// import Link from "next/link";

// const BlogPage: React.FC = () => (
//     <div className="max-w-7xl mx-auto pt-[220px] p-16">
//         <h1 className="text-4xl font-bold">Blog</h1>
//         <div className="space-y-6 mt-8">
//             {blogPosts.map((post) => (
//                 <div key={post.id} className="border p-4 rounded-md shadow-md">
//                     <h2 className="text-2xl font-semibold">{post.title}</h2>
//                     <p className="text-gray-600 text-sm mt-2">
//                         By {post.author} on {post.publishDate}
//                     </p>
//                     <img src={post.image} alt={post.title} className="mt-4 w-full h-auto rounded-md" />
//                     <p className="mt-4">{post.content.slice(0, 100)}...</p>
//                     <Link href={`/blog/${post.slug}`} className="text-blue-600 mt-4 inline-block">
//                         Read More
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     </div>
// );

// export default BlogPage;
