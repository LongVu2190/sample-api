import express from "express";
import { sampleController } from "../controllers/index.js";
const router = express.Router();

router.get('/sample', sampleController.getSampleById);

export default router