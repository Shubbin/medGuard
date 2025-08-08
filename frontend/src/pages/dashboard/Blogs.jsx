import { useEffect, useState } from "react";
import axios from "axios";
import { Pencil, Tags, FileText, Camera, Calendar } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogStats from "./BlogStats";

const API_URL = "https://medguardapi.onrender.com/api/blogs";

const BlogDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    content: "",
    blogImg: "",
    date: "",
    categoryTitle: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(API_URL);
      setPosts(res.data);
    } catch (err) {
      toast.error("Failed to fetch posts.");
      console.error("Error fetching posts:", err.message);
    }
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogPayload = {
      title: form.title,
      content: form.content,
      blogImg: form.blogImg,
      date: form.date,
      category: {
        title: form.categoryTitle,
      },
    };

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, blogPayload, headers);
        toast.success("Blog post updated.");
      } else {
        await axios.post(API_URL, blogPayload, headers);
        toast.success("Blog post created.");
      }

      setForm({
        title: "",
        content: "",
        blogImg: "",
        date: "",
        categoryTitle: "",
      });
      setEditingId(null);
      fetchPosts();
    } catch (err) {
      toast.error("Submit failed: " + err.response?.data?.error || err.message);
    }
  };

  const handleEdit = (post) => {
    setForm({
      title: post.title,
      content: post.content,
      blogImg: post.blogImg,
      date: post.date,
      categoryTitle: post.category?.title || "",
    });
    setEditingId(post._id);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Post deleted.");
      fetchPosts();
    } catch (err) {
      toast.error("Delete failed: " + err.response?.data?.error || err.message);
    }
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      // post.author?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <BlogStats />
      <div className="max-w-5xl px-4 py-10 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center">Create Blog</h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 mb-10 space-y-4 bg-white shadow-md rounded-xl"
        >
          <div>
            <label
              htmlFor="title"
              className="flex items-center gap-2 mb-2 text-xl font-bold text-primary-dark"
            >
              <Pencil />
              Title
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleInputChange}
              placeholder="Title"
              className="w-full p-2 rounded ring-1 ring-primary-dark"
              required
            />
          </div>
          <div>
            <label
              htmlFor="title"
              className="flex items-center gap-2 mb-2 text-xl font-bold text-primary-dark"
            >
              <FileText />
              Content
            </label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleInputChange}
              placeholder="Content"
              className="w-full p-2 rounded ring-1 ring-primary-dark"
              rows="3"
              required
            />
          </div>
          <div>
            <label
              htmlFor="title"
              className="flex items-center gap-2 mb-2 text-xl font-bold text-primary-dark"
            >
              <Camera />
              Blog Image
            </label>
            <input
              type="text"
              name="blogImg"
              value={form.blogImg}
              onChange={handleInputChange}
              placeholder="Image URL"
              className="w-full p-2 rounded ring-1 ring-primary-dark"
              required
            />
          </div>
          <div>
            <label
              htmlFor="title"
              className="flex items-center gap-2 mb-2 text-xl font-bold text-primary-dark"
            >
              <Calendar />
              Date
            </label>
            <input
              type="text"
              name="date"
              value={form.date}
              onChange={handleInputChange}
              placeholder="Date (e.g., July 20, 2025)"
              className="w-full p-2 rounded ring-1 ring-primary-dark"
              required
            />
          </div>

          {/* <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            name="authorName"
            value={form.authorName}
            onChange={handleInputChange}
            placeholder="Author Name"
            className="p-2 rounded ring-1 ring-primary-dark"
            required
          />
          <input
            type="text"
            name="authorRole"
            value={form.authorRole}
            onChange={handleInputChange}
            placeholder="Author Role"
            className="p-2 rounded ring-1 ring-primary-dark"
            required
          />
          <input
            type="text"
            name="authorImageUrl"
            value={form.authorImageUrl}
            onChange={handleInputChange}
            placeholder="Author Image URL"
            className="p-2 rounded ring-1 ring-primary-dark"
            required
          />
        </div> */}

          <div>
            <label
              htmlFor="title"
              className="flex items-center gap-2 mb-2 text-xl font-bold text-primary-dark"
            >
              <Tags />
              Category
            </label>
            <input
              type="text"
              name="categoryTitle"
              value={form.categoryTitle}
              onChange={handleInputChange}
              placeholder="Category"
              className="w-full p-2 rounded ring-1 ring-primary-dark"
              required
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"
          >
            {editingId ? "Update Post" : "Create Post"}
          </button>
        </form>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by title, author or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {filteredPosts.length === 0 ? (
            <p className="text-center text-gray-500">No posts found.</p>
          ) : (
            filteredPosts.map((post) => (
              <div
                key={post._id}
                className="relative p-6 bg-white shadow-md rounded-xl"
              >
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="mb-2 text-sm text-gray-600">
                  {post.category?.title} | By {post.author?.name} on {post.date}
                </p>
                <img
                  src={post.blogImg}
                  alt={post.title}
                  className="object-cover w-full mb-4 rounded h-52"
                />
                <p className="mb-2 text-gray-700">{post.content}</p>

                <div className="flex items-center gap-4 mt-4">
                  <button
                    onClick={() => handleEdit(post)}
                    className="text-sm text-yellow-600 underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="text-sm text-red-600 underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default BlogDashboard;
