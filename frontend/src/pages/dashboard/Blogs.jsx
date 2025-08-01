import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000/api/blogs";

const BlogDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    designImg: "",
    date: "",
    authorName: "",
    authorRole: "",
    authorImageUrl: "",
    categoryTitle: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(API_URL);
      setPosts(res.data);
    } catch (err) {
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
      description: form.description,
      designImg: form.designImg,
      date: form.date,
      author: {
        name: form.authorName,
        role: form.authorRole,
        imageUrl: form.authorImageUrl,
        href: "#",
      },
      category: {
        title: form.categoryTitle,
        href: "#",
      },
    };

    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, blogPayload);
      } else {
        await axios.post(API_URL, blogPayload);
      }
      setForm({
        title: "",
        description: "",
        designImg: "",
        date: "",
        authorName: "",
        authorRole: "",
        authorImageUrl: "",
        categoryTitle: "",
      });
      setEditingId(null);
      fetchPosts();
    } catch (err) {
      console.error("Submit error:", err.message);
    }
  };

  const handleEdit = (post) => {
    setForm({
      title: post.title,
      description: post.description,
      designImg: post.designImg,
      date: post.date,
      authorName: post.author?.name || "",
      authorRole: post.author?.role || "",
      authorImageUrl: post.author?.imageUrl || "",
      categoryTitle: post.category?.title || "",
    });
    setEditingId(post._id);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchPosts();
    } catch (err) {
      console.error("Delete error:", err.message);
    }
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">📝 Blog Dashboard</h1>

      {/* Blog Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-6 rounded-xl mb-10 space-y-4"
      >
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleInputChange}
          placeholder="Title"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleInputChange}
          placeholder="Description"
          className="w-full border p-2 rounded"
          rows="3"
          required
        />
        <input
          type="text"
          name="designImg"
          value={form.designImg}
          onChange={handleInputChange}
          placeholder="Image URL"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="date"
          value={form.date}
          onChange={handleInputChange}
          placeholder="Date (e.g., July 20, 2025)"
          className="w-full border p-2 rounded"
          required
        />

        {/* Author Section */}
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            name="authorName"
            value={form.authorName}
            onChange={handleInputChange}
            placeholder="Author Name"
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="authorRole"
            value={form.authorRole}
            onChange={handleInputChange}
            placeholder="Author Role"
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="authorImageUrl"
            value={form.authorImageUrl}
            onChange={handleInputChange}
            placeholder="Author Image URL"
            className="border p-2 rounded"
            required
          />
        </div>

        {/* Category */}
        <input
          type="text"
          name="categoryTitle"
          value={form.categoryTitle}
          onChange={handleInputChange}
          placeholder="Category"
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          {editingId ? "Update Post" : "Create Post"}
        </button>
      </form>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title, author or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      {/* Blog List */}
      <div className="space-y-6">
        {filteredPosts.length === 0 ? (
          <p className="text-center text-gray-500">No posts found.</p>
        ) : (
          filteredPosts.map((post) => (
            <div
              key={post._id}
              className="bg-white shadow-md p-6 rounded-xl relative"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-600 mb-2">
                {post.category?.title} | By {post.author?.name} on {post.date}
              </p>
              <img
                src={post.designImg}
                alt={post.title}
                className="w-full h-52 object-cover rounded mb-4"
              />
              <p className="text-gray-700 mb-2">{post.description}</p>

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
  );
};

export default BlogDashboard;
