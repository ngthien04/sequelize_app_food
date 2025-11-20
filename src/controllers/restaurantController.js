import initModels from "../models/init-models.js";
import { sequelize } from "../models/connect.js";

const models = initModels(sequelize);
const { like_res, rate_res, restaurant, users } = models;

const handleError = (res, error) => {
  console.error(error);
  return res.status(500).json({ message: "Internal server error", error: error.message });
};

export const toggleLike = async (req, res) => {
  try {
    const { user_id, res_id, date_like } = req.body;
    if (!user_id || !res_id) {
      return res.status(400).json({ message: "user_id and res_id are required" });
    }

    const existing = await like_res.findOne({ where: { user_id, res_id } });
    if (existing) {
      await existing.destroy();
      return res.json({ message: "Unliked successfully" });
    }

    const newLike = await like_res.create({ user_id, res_id, date_like });
    return res.status(201).json({ message: "Liked successfully", data: newLike });
  } catch (error) {
    return handleError(res, error);
  }
};

export const getLikesByRestaurant = async (req, res) => {
  try {
    const { res_id } = req.params;
    const likes = await like_res.findAll({
      where: { res_id },
      include: [{ model: users, as: "user", attributes: ["user_id", "full_name", "email"] }],
    });
    return res.json({ total: likes.length, data: likes });
  } catch (error) {
    return handleError(res, error);
  }
};

export const getLikesByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const likes = await like_res.findAll({
      where: { user_id },
      include: [{ model: restaurant, as: "restaurant", attributes: ["res_id", "res_name", "image"] }],
    });
    return res.json({ total: likes.length, data: likes });
  } catch (error) {
    return handleError(res, error);
  }
};

export const rateRestaurant = async (req, res) => {
  try {
    const { user_id, res_id, amount, date_rate } = req.body;
    if (!user_id || !res_id || !amount) {
      return res.status(400).json({ message: "user_id, res_id and amount are required" });
    }

    if (Number(amount) < 1 || Number(amount) > 5) {
      return res.status(400).json({ message: "amount must be between 1 and 5" });
    }

    const [rating, created] = await rate_res.findOrCreate({
      where: { user_id, res_id },
      defaults: { amount, date_rate },
    });

    if (!created) {
      rating.amount = amount;
      rating.date_rate = date_rate || rating.date_rate;
      await rating.save();
    }

    return res.status(created ? 201 : 200).json({
      message: created ? "Rated successfully" : "Rating updated",
      data: rating,
    });
  } catch (error) {
    return handleError(res, error);
  }
};

export const getRatesByRestaurant = async (req, res) => {
  try {
    const { res_id } = req.params;
    const rates = await rate_res.findAll({
      where: { res_id },
      include: [{ model: users, as: "user", attributes: ["user_id", "full_name", "email"] }],
    });
    return res.json({ total: rates.length, data: rates });
  } catch (error) {
    return handleError(res, error);
  }
};

export const getRatesByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const rates = await rate_res.findAll({
      where: { user_id },
      include: [{ model: restaurant, as: "restaurant", attributes: ["res_id", "res_name", "image"] }],
    });
    return res.json({ total: rates.length, data: rates });
  } catch (error) {
    return handleError(res, error);
  }
};

