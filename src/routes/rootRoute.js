import { Router } from "express";
import restaurantRoute from "./restaurantRoute.js";
import userRoute from "./userRoute.js";

const rootRoute = Router();

rootRoute.use("/restaurant", restaurantRoute);
rootRoute.use("/user", userRoute);

export default rootRoute;

