import express from "express"
import { addGoal, getGoals,getSingleGoal } from "../controllers/goalControllers";
export const router = express.Router();

router.get("/allGoals/:id",getGoals);
router.get("/singleGoal/:id",getSingleGoal)
router.post("/addGoal",addGoal);