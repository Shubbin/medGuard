import { useState } from "react";
import { Helmet } from "react-helmet-async";

// Dummy blog post data with images and medical-related content
const postsData = [
  {
    id: 1,
    title: "How AI is Transforming Healthcare",
    excerpt:
      "Explore how artificial intelligence is revolutionizing diagnostics, treatment, and drug discovery.",
    author: "Dr. Ada Bright",
    date: "August 1, 2025",
    image:
      "https://img.freepik.com/free-photo/african-american-doctor-standing-hospital-corridor_1157-33842.jpg"
,
  },
  {
    id: 2,
    title: "Telemedicine: Bridging the Gap in Rural Health",
    excerpt:
      "Discover how telemedicine is improving access to quality care for remote communities.",
    author: "Dr. Emmanuel Yemi",
    date: "July 28, 2025",
    image:
      "https://img.freepik.com/free-photo/african-american-doctor-standing-hospital-corridor_1157-33842.jpg"
,
  },
  {
    id: 3,
    title: "Understanding mRNA Vaccines",
    excerpt:
      "A simplified guide to how mRNA vaccines work to protect your immune system.",
    author: "Dr. Sophia Lin",
    date: "July 22, 2025",
    image:
      "https://img.freepik.com/free-photo/african-american-doctor-standing-hospital-corridor_1157-33842.jpg"
,
  },
];

const POSTS_PER_PAGE = 2;

export default function Blog() {
  // State for search input
  const [searchTerm, setSearchTerm] = useState("");
  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts by search term in the title
  const filteredPosts = postsData.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total number of pages for pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  // Get the index for slicing the array of posts
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  // Get current visible posts based on pagination
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-16 sm:px-8 lg:px-24">
      <Helmet>
        <title>Blog - MedGuard Insights</title>
      </Helmet>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-2 tracking-tight text-center drop-shadow-lg">
            MedGuard Blog
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-300 text-center max-w-2xl mb-6">
            Insights, trends, and stories at the intersection of medicine and
            technology.
          </p>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search posts..."
            className="w-full sm:w-96 px-5 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 mb-2"
          />
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {currentPosts.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 dark:text-gray-400 py-12 text-lg">
              No posts found.
            </div>
          ) : (
            currentPosts.map((post) => (
              <div
                key={post.id}
                className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 flex flex-col h-full"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-blue-500/80 text-white text-xs px-3 py-1 rounded-full shadow">
                    {post.date}
                  </div>
                </div>
                <div className="flex-1 flex flex-col p-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-auto">
                    {/* <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold text-lg">
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div> */}
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.author}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-between items-center mt-14 gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-5 py-2.5 rounded-xl bg-blue-600 dark:bg-blue-700 text-white font-semibold shadow disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Newer
          </button>
          <span className="text-gray-600 dark:text-gray-300 text-base">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-5 py-2.5 rounded-xl bg-blue-600 dark:bg-blue-700 text-white font-semibold shadow disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Older
          </button>
        </div>
      </div>
    </main>
  );
}
