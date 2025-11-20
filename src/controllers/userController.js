import initModels from "../models/init-models.js";
import { sequelize } from "../models/connect.js";

const models = initModels(sequelize);
const { orders, food } = models;

const handleError = (res, error) => {
  console.error(error);
  return res.status(500).json({ message: "Internal server error", error: error.message });
};

export const createOrder = async (req, res) => {
  try {
    const { food_id } = req.params;
    const { user_id, amount = 1, code, arr_sub_id } = req.body;

    if (!food_id || !user_id) {
      return res.status(400).json({ message: "food_id param and user_id body are required" });
    }

    const payload = {
      food_id,
      user_id,
      amount,
      code,
      arr_sub_id: Array.isArray(arr_sub_id) ? arr_sub_id.join(",") : arr_sub_id,
    };

    const newOrder = await orders.create(payload);
    return res.status(201).json({ message: "Order created", data: newOrder });
  } catch (error) {
    return handleError(res, error);
  }
};

export const getOrdersByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const data = await orders.findAll({
      where: { user_id },
      include: [
        {
          model: food,
          as: "food",
          attributes: ["food_id", "food_name", "price", "image"],
        },
      ],
      order: [["orders_id", "DESC"]],
    });
    return res.json({ total: data.length, data });
  } catch (error) {
    return handleError(res, error);
  }
};

