import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import rootRoute from "./routes/rootRoute.js";
import { sequelize } from "./models/connect.js";

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "API is running!",
    endpoints: {
      restaurant: {
        "POST /restaurant/like": "Toggle like/unlike restaurant",
        "GET /restaurant/likes-by-res/:res_id": "Get likes by restaurant",
        "GET /restaurant/likes-by-user/:user_id": "Get likes by user",
        "POST /restaurant/rate": "Rate restaurant",
        "GET /restaurant/rates-by-res/:res_id": "Get rates by restaurant",
        "GET /restaurant/rates-by-user/:user_id": "Get rates by user",
      },
      user: {
        "POST /user/order/:food_id": "Create order",
        "GET /user/orders/:user_id": "Get orders by user",
      },
    },
  });
});

app.use(rootRoute);

const port = process.env.PORT || 8080;
app.listen(port, async () => {
  console.log(`Server http://localhost:${port}`);
  await sequelize.authenticate();
  console.log("DB connected");
});

