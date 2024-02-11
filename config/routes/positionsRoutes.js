import express from "express";
import {
  getAllPositions,
  createPositions,
} from "../../src/api/v1/controllers/positionsControllers.js";

const router = express.Router();
//mas que nada lo hice para practicar, no era necesario, solo bastaba con insertarlos directamente como sali en la guia

router.get("/positions", getAllPositions);
router.post("/positions", createPositions);

export default router;
