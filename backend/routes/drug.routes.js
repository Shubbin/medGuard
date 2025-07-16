import express from 'express';
import {
  getAllDrugs,
  getDrugById,
  createDrug,
  updateDrug,
  deleteDrug,
  verifyDrugByNRN,
} from '../controllers/drug.controller.js';
import { authMiddleware, requireRole } from '../middleware/auth.js';

const router = express.Router();

router.get("/", getAllDrugs);
router.get("/:id", getDrugById);
router.post("/", authMiddleware, requireRole(["admin", "sub-admin"]), createDrug);
router.put("/:id", authMiddleware, requireRole(["admin", "sub-admin"]), updateDrug);
router.delete("/:id", authMiddleware, requireRole(["admin"]), deleteDrug);

router.post("/verify", verifyDrugByNRN);

export default router;