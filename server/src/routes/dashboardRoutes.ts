import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboardController";
import { get } from "http";

const router = Router();

router.get("/", getDashboardMetrics);

export default router;
