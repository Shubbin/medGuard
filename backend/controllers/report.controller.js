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

// Get All Reports
export const getReports = async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.status(200).json(reports);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch reports", error: err.message });
  }
};

// 🔍 Get Single Report by ID
export const getReportById = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.status(200).json(report);
  } catch (err) {
    console.error("Get report by ID error:", err);
    res.status(500).json({ message: "Failed to fetch report", error: err.message });
  }
};

// 🔍 Search Reports (by drugName or location)
export const searchReports = async (req, res) => {
  try {
    const { drugName, location } = req.query;

    const filter = {};
    if (drugName) {
      filter.drugName = { $regex: new RegExp(drugName, "i") }; // case-insensitive
    }
    if (location) {
      filter.location = { $regex: new RegExp(location, "i") };
    }

    const reports = await Report.find(filter).sort({ createdAt: -1 });
    res.status(200).json(reports);
  } catch (err) {
    console.error("Search reports error:", err);
    res.status(500).json({ message: "Failed to search reports", error: err.message });
  }
};
