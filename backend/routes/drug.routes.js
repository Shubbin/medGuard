import express from 'express';
import {
  getAllDrugs,
  getDrugById,
  createDrug,
  updateDrug,
  deleteDrug,
  verifyDrugByNRN,
} from '../controllers/drug.controller.js';
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllDrugs);
router.get("/:id", getDrugById);
router.post("/", protect, requireRole(["admin", "sub-admin"]), createDrug);
router.put("/:id", protect, requireRole(["admin", "sub-admin"]), updateDrug);
router.delete("/:id", protect, requireRole(["admin"]), deleteDrug);

router.post("/verify", verifyDrugByNRN);

export default router;