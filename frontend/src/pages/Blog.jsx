import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import image2 from "../assets/images/meds.jpg";
import image3 from "../assets/images/test_lab.jpg";
// Dummy blog post data with blogImgs and medical-related content
const postsData = [
  {
    id: 1,
    title: "How AI is Transforming Healthcare",
    content:
      "Explore how artificial intelligence is revolutionizing diagnostics, treatment, and drug discovery.",
    date: "August 1, 2025",
    blogImg:
      "https://img.freepik.com/free-photo/african-american-doctor-standing-hospital-corridor_1157-33842.jpg",
  },
  {
    id: 2,
    title: "Telemedicine: Bridging the Gap in Rural Health",
    content:
      "Discover how telemedicine is improving access to quality care for remote communities.",
    date: "July 28, 2025",
    blogImg: image2,
  },
  {
    id: 3,
    title: "Understanding mRNA Vaccines",
    content:
      "A simplified guide to how mRNA vaccines work to protect your immune system.",
    date: "July 22, 2025",
    blogImg: image3,
  },
  {
    id: 4,
    title: "Understanding The Dangers Of Fake Medication",
    content:
      "A simplified guide to how mRNA vaccines work to protect your immune system.",

    date: "July 22, 2024",
    blogImg:
      "https://img.freepik.com/free-photo/african-american-doctor-standing-hospital-corridor_1157-33842.jpg",
  },
  {
    id: 5,
    title: "Why you must watch what you eat",
    content:
      "A simplified guide to how mRNA vaccines work to protect your immune system.",
    date: "July 22, 2023",
    blogImg:
      "https://img.freepik.com/free-photo/african-american-doctor-standing-hospital-corridor_1157-33842.jpg",
  },
];

const POSTS_PER_PAGE = 3;

export default function Blog() {
  // State for search input
  const [searchTerm, setSearchTerm] = useState("");
  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  //Sort By Date
  const sortedPosts = [...postsData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Filter posts by search term in the title
  // const filteredPosts = postsData.filter((post) =>
  //   post.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const filteredPosts = sortedPosts.filter((post) => {
    const term = searchTerm.trim().toLowerCase();
    return (
      post.title.toLowerCase().includes(term) ||
      post.content.toLowerCase().includes(term)
    );
  });
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
    <main className="min-h-screen px-4 py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 sm:px-8 lg:px-24">
      <Helmet>
        <title>Blog - MedGuard Insights</title>
      </Helmet>
      <div className="w-full mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between mb-10">
          <div className="text-left">
            <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl dark:text-white drop-shadow-lg">
              MedGuard Blog
            </h1>
            <p className="max-w-2xl mb-6 text-lg text-center text-gray-500 dark:text-gray-300">
              Insights, trends, and stories at the intersection of medicine and
              technology.
            </p>
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search posts..."
            className="w-full px-5 py-3 mb-2 text-gray-700 bg-white border border-gray-200 shadow sm:w-96 rounded-2xl dark:border-gray-700 focus:outline-none ring-2 ring-blue-300 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.length === 0 ? (
            <div className="py-12 text-lg text-center text-gray-500 col-span-full dark:text-gray-400">
              No posts found.
            </div>
          ) : (
            currentPosts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col h-full overflow-hidden transition-all bg-white border border-gray-100 shadow-lg group rounded-3xl hover:shadow-2xl dark:border-gray-700"
              >
                <div className="relative">
                  <img
                    src={post.blogImg}
                    alt={post.title}
                    className="object-cover object-center w-full h-56 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute px-3 py-1 text-xs text-white rounded-full shadow top-3 left-3 bg-blue-500/80">
                    {post.date}
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h2 className="mb-2 text-2xl font-bold text-gray-800 transition-colors dark:text-white group-hover:text-blue-600">
                    {post.title}
                  </h2>
                  <p className="flex-1 mb-4 text-gray-600 dark:text-gray-300">
                    {post.content}
                  </p>
                  <div className="flex items-center gap-2 mt-auto"></div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex items-center justify-between gap-4 mt-14">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-5 py-2.5 rounded-xl bg-blue-600 dark:bg-blue-700 text-white font-semibold shadow disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Newer
          </button>
          <span className="text-base text-gray-600 dark:text-gray-300">
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
