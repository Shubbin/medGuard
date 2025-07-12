import { Drug } from "../models/drugs.models.js";

export const getAllDrugs = async (req, res) => {
  const drugs = await Drug.find();
  res.json(drugs);
};

export const getDrugById = async (req, res) => {
  const drug = await Drug.findById(req.params.id);
  if (!drug) return res.status(404).json({ message: "Drug not found" });
  res.json(drug);
};

export const createDrug = async (req, res) => {
  try {
    const drug = await Drug.create(req.body);
    res.status(201).json(drug);
  } catch (err) {
    res.status(500).json({ message: "Create failed", error: err.message });
  }
};

export const updateDrug = async (req, res) => {
  const drug = await Drug.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!drug) return res.status(404).json({ message: "Drug not found" });
  res.json(drug);
};

export const deleteDrug = async (req, res) => {
  const drug = await Drug.findByIdAndDelete(req.params.id);
  if (!drug) return res.status(404).json({ message: "Drug not found" });
  res.json({ message: "Drug deleted" });
};
