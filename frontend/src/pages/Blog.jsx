import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

// 🔥 Your dynamic blog fetcher
export const fetchAllBlogs = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/blogs"); 
    if (!response.ok) throw new Error("Failed to fetch blogs");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error.message);
    return [];
  }
};

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const blogs = await fetchAllBlogs();
      setBlogPosts(blogs);
    };
    loadBlogs();
  }, []);

  return (
    <div className="p-4">
      <section>
        <div className="max-w-7xl mx-auto flex justify-between my-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Explore how MedGuard is transforming healthcare through technology, awareness, and innovation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post._id || index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.designImg || "https://via.placeholder.com/600"})` }}
              ></div>

              <div className="p-6">
                <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                  {post.category?.title || "Uncategorized"}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  <Link to={`/blog/${post._id}`}>{post.title}</Link>
                </h3>

                <p className="text-gray-700 mb-4">{post.description}</p>

                <div className="flex items-center gap-4 mt-4">
                  <img
                    src={post.author?.imageUrl || "https://via.placeholder.com/100"}
                    alt={post.author?.name || "Author"}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{post.author?.name || "Unknown Author"}</p>
                    <p className="text-sm text-gray-500">{post.author?.role || "Contributor"}</p>
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-500 mt-4">
                  <Calendar size={16} className="mr-1" />
                  <span>{post.date || "Unknown Date"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
