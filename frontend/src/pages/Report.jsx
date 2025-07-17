import { useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Report = () => {
  const [formData, setFormData] = useState({
    drugName: "",
    description: "",
    location: "",
    photo: null,
  });

  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({ ...formData, photo: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("drugName", formData.drugName);
      data.append("description", formData.description);
      data.append("location", formData.location);
      if (formData.photo) {
        data.append("photo", formData.photo);
      }

      const response = await axios.post(`${API_URL}/report/create`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Backend response:", response.data);

      alert(" Report submitted successfully. Thank you!");
      setFormData({
        drugName: "",
        description: "",
        location: "",
        photo: null,
      });
      document.getElementById("photo").value = null;
    } catch (err) {
      console.error("Submit failed:", err);
      alert("❌ Failed to submit report: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="bg-gradient-to-tr from-blue-50 to-white min-h-screen py-12 px-6 md:px-16 text-gray-800">
      <Helmet>
        <title>Report Suspicious Drug | MedGuard</title>
        <meta
          name="description"
          content="Help MedGuard track and eliminate fake drugs by submitting a report on suspicious medicines."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-4 text-center">
          Report a Suspicious Drug
        </h1>
        <p className="text-md sm:text-lg text-gray-600 mb-8 text-center">
          Help us identify and stop counterfeit or harmful drugs. Your report could save lives.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg space-y-6 border border-gray-100"
        >
          {/* Drug Name */}
          <div>
            <label htmlFor="drugName" className="block text-sm font-semibold text-gray-700 mb-1">
              Drug Name <span className="text-red-500">*</span>
            </label>
            <input
              id="drugName"
              name="drugName"
              type="text"
              value={formData.drugName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark transition"
              placeholder="e.g., Amoxicillin 500mg"
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-1">
              Location Found <span className="text-red-500">*</span>
            </label>
            <input
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark transition"
              placeholder="e.g., Alaba Market, Lagos"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-1">
              Description or Effects Noticed <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark transition resize-none"
              placeholder="Describe packaging, side effects, or anything unusual..."
            />
          </div>

          {/* Photo */}
          <div>
            <label htmlFor="photo" className="block text-sm font-semibold text-gray-700 mb-1">
              Upload Photo (optional)
            </label>
            <input
              id="photo"
              name="photo"
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:rounded-lg file:text-sm file:font-semibold file:bg-primary-dark file:text-white hover:file:bg-primary transition"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-900 transition shadow-lg hover:shadow-xl active:scale-95"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Report;
