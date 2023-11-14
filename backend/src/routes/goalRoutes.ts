import express from "express"
import { getGoals } from "../controllers/goalControllers";
export const router = express.Router();

router.get("/allGoals/:id",getGoals);