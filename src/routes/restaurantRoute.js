import { Router } from "express";
import {
  getLikesByRestaurant,
  getLikesByUser,
  getRatesByRestaurant,
  getRatesByUser,
  rateRestaurant,
  toggleLike,
} from "../controllers/restaurantController.js";

const restaurantRoute = Router();

restaurantRoute.post("/like", toggleLike);
restaurantRoute.get("/likes-by-res/:res_id", getLikesByRestaurant);
restaurantRoute.get("/likes-by-user/:user_id", getLikesByUser);

restaurantRoute.post("/rate", rateRestaurant);
restaurantRoute.get("/rates-by-res/:res_id", getRatesByRestaurant);
restaurantRoute.get("/rates-by-user/:user_id", getRatesByUser);

export default restaurantRoute;

