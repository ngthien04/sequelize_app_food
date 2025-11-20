import _sequelize from "sequelize";
const { Model, DataTypes } = _sequelize;

export default class orders extends Model {
  static init(sequelize) {
    return super.init(
      {
        orders_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        food_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        amount: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        code: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        arr_sub_id: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "orders",
        modelName: "orders",
        timestamps: false,
      }
    );
  }
}

