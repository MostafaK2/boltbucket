import express from "express";
import path from "path";

import { fileURLToPath } from "url";

import CustomItemController from "../controllers/customItem.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", CustomItemController.getCustomItems);
router.get("/:id", CustomItemController.getCustomItemsById);
router.post("/", CustomItemController.createCustomItem);
router.delete("/:id", CustomItemController.deleteCustomItem);
router.put("/:id", CustomItemController.updateCustomItem);

export default router;
