import { useEffect, useState } from "react";
import { BarChart2Icon } from "lucide-react";
import SectionHeader from "../../components/ui/SectionHeader";
import BlogCard from "../../components/dashboardComponets/Blogs/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dummy fetch simulation (replace with real backend later)
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Simulate API delay
        setTimeout(() => {
          setBlogs([
            {
              title: "Why React Rocks",
              content: "React makes it painless to create interactive UIs.",
              date: "July 20, 2025",
              author: "Shubbin",
            },
            {
              title: "Lucide Icons + Tailwind",
              content: "Beautiful, consistent icons made for modern UIs.",
              date: "July 19, 2025",
              author: "Admin",
            },
            {
              title: "Reusable Component Philosophy",
              content: "Write once, reuse everywhere. Saves time and sanity.",
              date: "July 18, 2025",
              author: "Engineer X",
            },
          ]);
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.error("Failed to load blogs:", err);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="p-4 sm:p-6 md:p-10 space-y-8">
      <SectionHeader title="Blogs" icon={BarChart2Icon} />

      {loading ? (
        <div className="text-center text-gray-500 animate-pulse">
          Loading blogs...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              content={blog.content}
              date={blog.date}
              author={blog.author}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Blogs;
