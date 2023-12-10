import express from "express"
import { addGoal, getGoals } from "../controllers/goalControllers";
export const router = express.Router();

router.get("/allGoals/:id",getGoals);
router.post("/addGoal",addGoal);