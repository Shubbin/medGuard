import Report from "../models/report.model.js";

// Create Report
export const createReport = async (req, res) => {
  try {
    const { drugName, description, location } = req.body;

    const photo = req.file ? req.file.filename : null;

    const report = new Report({
      drugName,
      description,
      location,
      photo,
    });

    await report.save();

    res.status(201).json({ message: "Report submitted successfully", report });
  } catch (err) {
    console.error("Report creation error:", err);
    res.status(500).json({ message: "Failed to submit report", error: err.message });
  }
};

// Get All Reports (optional)
export const getReports = async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.status(200).json(reports);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch reports", error: err.message });
  }
};
