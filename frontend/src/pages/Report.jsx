import { Pill, MapPin, PenLine, Camera } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Report = () => {
  const [formData, setFormData] = useState({
    drugName: "",
    description: "",
    location: "",
    photo: null,
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({ ...formData, photo: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend logic here
    console.log("Submitted Report:", formData);
    alert("Thank you. Your report has been submitted.");
  };

  return (
    <div className="bg-background-light min-h-screen py-8 px-6 md:px-20 text-text">
      <Helmet>
        <title>Report Suspicious Drug | MedGuard</title>
        <meta
          name="description"
          content="Help MedGuard track and eliminate fake drugs by submitting a report on suspicious medicines."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-primary-dark text-4xl font-extrabold mb-4">
          Report a Suspicious Drug
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Help us identify and stop the circulation of counterfeit or suspicious
          medications. Your report could save lives.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-white p-6 rounded-xl shadow-md space-y-6 border border-gray-100 text-primary-dark  [&__label]:text-md [&__label]:font-semibold"
        >
          <div>
            <label
              className="flex items-center gap-2 text-md font-medium mb-1"
              htmlFor="drugName"
            >
              <Pill className="h-5" />
              Drug Name
            </label>
            <input
              id="drugName"
              name="drugName"
              type="text"
              value={formData.drugName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2  shadow-md rounded-md focus:outline-primary-dark focus:ring-2 focus:ring-primary"
              placeholder="e.g., Amoxillin 500mg"
            />
          </div>

          <div>
            <label
              className="flex items-center gap-2 text-sm font-medium mb-1"
              htmlFor="location"
            >
              <MapPin className="h-5" />
              Location Found
            </label>
            <input
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full shadow-md px-4 py-2 rounded-md focus:outline-primary-dark focus:ring-2 focus:ring-primary"
              placeholder="e.g., Alaba Market, Lagos"
            />
          </div>

          <div>
            <label
              className="flex items-center gap-2 text-sm font-medium mb-1"
              htmlFor="description"
            >
              <PenLine className="h-5" />
              Description or Effects Noticed
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 shadow-md rounded-md focus:outline-primary-dark focus:ring-2 focus:ring-primary"
              placeholder="Describe packaging, side effects, or anything unusual..."
            />
          </div>

          <div>
            <label
              className="flex items-center gap-2 text-md font-medium mb-1"
              htmlFor="photo"
            >
              <Camera className="h-5" />
              Upload Photo (optional)
            </label>
            <input
              id="photo"
              name="photo"
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="shadow-md p-2 max-w-xs rounded-md file:border-primary-dark  block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:rounded-md file:text-sm file:bg-primary file:text-white file:bg-primary-dark hover:file:bg-blue-800"
            />
          </div>

          <button
            type="submit"
            className="bg-primary-dark  text-primary px-6 py-3 rounded-lg hover:bg-blue-800 transition shadow text-white"
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default Report;
