import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Report = () => {
  const [formData, setFormData] = useState({
    drugName: "",
    description: "",
    location: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("drugName", formData.drugName);
    data.append("description", formData.description);
    data.append("location", formData.location);
    if (formData.photo) {
      data.append("photo", formData.photo);
    }

    try {
      const response = await fetch(
        "http://localhost:8000/api/reports/create",
        {
          method: "POST",
          body: data,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Submission failed.");
      }

      const result = await response.json();
      console.log("✅ Backend response:", result);
      toast.success("✅ Report submitted successfully. Thank you!");

      setFormData({
        drugName: "",
        description: "",
        location: "",
        photo: null,
      });
      document.getElementById("photo").value = null;
    } catch (err) {
      console.error("❌ Submit failed:", err);
      toast.error("❌ Failed to submit report: " + err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-14 p-8 bg-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-6 text-center tracking-tight">
        Report a Drug
      </h2>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="space-y-6"
      >
        <div>
          <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
            Drug Name
          </label>
          <input
            type="text"
            name="drugName"
            value={formData.drugName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 min-h-[100px]"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
            Photo (optional)
          </label>
          <input
            type="file"
            name="photo"
            id="photo"
            accept="image/*"
            onChange={handleChange}
            className="w-full  file:bg-primary-dark file:p-2 file:rounded-md file:text-white file:border-none p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-bold text-lg shadow transition-all"
        >
          Submit Report
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Report;
