import express from "express"
import { addGoal, getGoals,singleGoal } from "../controllers/goalControllers";
export const router = express.Router();

router.get("/allGoals/:id",getGoals);
router.get("/singleGoal/:id",singleGoal)
router.post("/addGoal",addGoal);