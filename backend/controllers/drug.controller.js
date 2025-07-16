import { Drug } from "../models/drugs.models.js";

// 🔍 Get all drugs
export const getAllDrugs = async (req, res) => {
  try {
    const drugs = await Drug.find();
    res.json(drugs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching drugs", error: err.message });
  }
};

// 🔍 Get a drug by ID
export const getDrugById = async (req, res) => {
  try {
    const drug = await Drug.findById(req.params.id);
    if (!drug) return res.status(404).json({ message: "Drug not found" });
    res.json(drug);
  } catch (err) {
    res.status(500).json({ message: "Error fetching drug", error: err.message });
  }
};

// ➕ Create a new drug
export const createDrug = async (req, res) => {
  try {
    const drug = await Drug.create(req.body);
    res.status(201).json(drug);
  } catch (err) {
    res.status(500).json({ message: "Create failed", error: err.message });
  }
};

// ✏️ Update an existing drug
export const updateDrug = async (req, res) => {
  try {
    const drug = await Drug.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!drug) return res.status(404).json({ message: "Drug not found" });
    res.json(drug);
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};

// ❌ Delete a drug
export const deleteDrug = async (req, res) => {
  try {
    const drug = await Drug.findByIdAndDelete(req.params.id);
    if (!drug) return res.status(404).json({ message: "Drug not found" });
    res.json({ message: "Drug deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
};

// ✅ Verify drug by NRN
export const verifyDrugByNRN = async (req, res) => {
  const { nrn } = req.body;

  if (!nrn) {
    return res.status(400).json({ success: false, message: "NRN is required for verification" });
  }

  try {
    const drug = await Drug.findOne({ nrn });

    if (!drug) {
      return res.status(404).json({ success: false, message: "Drug not found or not approved" });
    }

    if (drug.status !== "Active") {
      return res.status(403).json({ success: false, message: "Drug is inactive or unapproved" });
    }

    return res.status(200).json({
      success: true,
      message: "Drug is authentic and approved",
      data: {
        product_name: drug.product_name,
        active_ingredients: drug.active_ingredients,
        product_category: drug.product_category,
        form: drug.form,
        roa: drug.roa,
        strengths: drug.strengths,
        applicant_name: drug.applicant_name,
        approval_date: drug.approval_date,
        status: drug.status,
      },
    });
  } catch (err) {
    console.error("Error verifying drug:", err);
    return res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });
  }
};
