import express from "express"
import { getAllUsers } from "../controllers/userControllers";
export const router = express.Router();

router.get("/all",getAllUsers);



