import express from "express"
import { getAllUsers,getUser, registerUser} from "../controllers/userControllers";
export const router = express.Router();

router.get("/all",getAllUsers);
router.get("/:id",getUser);
router.post("/register",registerUser);

