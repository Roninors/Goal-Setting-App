import express from "express"
import { getAllUsers,getUser,getGoals} from "../controllers/userControllers";
export const router = express.Router();

router.get("/all",getAllUsers);
router.get("/:id",getUser);
router.get("/goals/:id",getGoals);

