import _food from "./food.js";
import _like_res from "./like_res.js";
import _orders from "./orders.js";
import _rate_res from "./rate_res.js";
import _restaurant from "./restaurant.js";
import _users from "./users.js";

export default function initModels(sequelize) {
  const food = _food.init(sequelize);
  const like_res = _like_res.init(sequelize);
  const orders = _orders.init(sequelize);
  const rate_res = _rate_res.init(sequelize);
  const restaurant = _restaurant.init(sequelize);
  const users = _users.init(sequelize);

  like_res.belongsTo(restaurant, { as: "restaurant", foreignKey: "res_id" });
  restaurant.hasMany(like_res, { as: "likes", foreignKey: "res_id" });

  like_res.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(like_res, { as: "likes", foreignKey: "user_id" });

  rate_res.belongsTo(restaurant, { as: "restaurant", foreignKey: "res_id" });
  restaurant.hasMany(rate_res, { as: "rates", foreignKey: "res_id" });

  rate_res.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(rate_res, { as: "rates", foreignKey: "user_id" });

  orders.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(orders, { as: "orders", foreignKey: "user_id" });

  orders.belongsTo(food, { as: "food", foreignKey: "food_id" });
  food.hasMany(orders, { as: "orders", foreignKey: "food_id" });

  return {
    food,
    like_res,
    orders,
    rate_res,
    restaurant,
    users,
  };
}

