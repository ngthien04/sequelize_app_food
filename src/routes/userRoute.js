import { Router } from "express";
import { createOrder, getOrdersByUser } from "../controllers/userController.js";

const userRoute = Router();

userRoute.post("/order/:food_id", createOrder);
userRoute.get("/orders/:user_id", getOrdersByUser);

export default userRoute;

