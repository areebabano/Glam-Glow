import BlogCard from "@/src/components/BlogCard";
import Sidebar from "@/src/components/SideBar";
import { blogs } from "@/src/app/Data/blogData";

const BlogPage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 px-14 max-w-7xl mx-auto font-serif mt-5">
      {/* Blog Section */}
      <main className="flex-1">
        <header className="mb-8 bg-white">
          <h1
            className="text-4xl font-bold mb-4 text-white flex items-center glow-text"
            data-aos="fade-right"
          >
            {/* <FaBlog className="w-8 h-8 text-teal-900 mr-2" aria-hidden="true" /> */}
            Latest Fashion Blog Posts
          </h1>
          <p className="mt-2 text-md text-gray-500" data-aos="fade-up">
            Stay updated with the latest trends, tips, and insights from the
            world of fashion.
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
