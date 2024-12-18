"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FaCalendarAlt,
  FaPenNib,
  FaComments,
  FaRegCommentDots,
} from "react-icons/fa";
import { blogs } from "@/src/app/Data/blogData";
import SideBar from "@/src/components/SideBar";
import Link from "next/link";

const BlogPost = ({ params }: { params: { slug: string } }) => {
  const blog = blogs.find((b) => b.slug === params.slug);

  // If the blog is not found, show an error message
  if (!blog) {
    return <p className="text-center text-red-500">Blog post not found.</p>;
  }

  // State to manage the comments
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  // Handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment(""); // Clear the input field after submitting
    }
  };

  return (
    <div className="p-4 px-14 max-w-7xl mx-auto font-serif">
      {/* Back to Blog Page */}
      <div className="mb-4">
        <Link
          href={`/blog`}
          className="mt-4 inline-block text-gray-600 hover:text-teal-700 font-serif transition-colors duration-300"
        >
          &larr; Back to Blogs
        </Link>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog Content - Spanning 2 Columns */}
        <div className="md:col-span-2">
          {/* Blog Post */}
          <div>
            <Image
              src={blog.image}
              alt={blog.title}
              width={800}
              height={400}
              className="rounded-lg object-cover w-full"
            />
            <div className="mt-6">
              <h1 className="text-3xl font-bold text-[#151875]">
                {blog.title}
              </h1>
              <div className="flex items-center text-gray-500 mt-2">
                <span className="flex items-center mr-4">
                  <FaPenNib className="mr-1 text-red-500" />
                  {blog.blogger}
                </span>
                <span className="flex items-center">
                  <FaCalendarAlt className="text-yellow-500 mr-1" />
                  {blog.date}
                </span>
              </div>
              {/* Render content with dangerouslySetInnerHTML */}
              <div
                className="mt-6 text-gray-700"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>

          {/* Comment Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2 flex items-center">
              <FaComments className="mr-2 text-teal-900" />
              Share Your Thoughts
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              We appreciate your feedback. Please provide your thoughts,
              questions, or comments on this post.
            </p>
            <form onSubmit={handleCommentSubmit} className="mt-4 space-y-4">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows={4}
                placeholder="Type your comment here..."
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-900 text-lg"
              />
              <button
                type="submit"
                className="w-full bg-teal-900 text-white py-2 px-4 font-serif font-bold rounded-full hover:bg-pink-600 transition-colors duration-300 text-lg"
              >
                Post Comment
              </button>
            </form>
          </div>

          {/* Displaying Comments */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRegCommentDots className="mr-2 text-teal-900" />
              Comments ({comments.length})
            </h3>
            <div className="space-y-4">
              {comments.length > 0 ? (
                comments.map((comment, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-md border border-gray-200 shadow-sm"
                  >
                    <p className="text-gray-700">{comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">
                  No comments yet. Be the first to share your thoughts!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar - Always on the Right */}
        <div>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
