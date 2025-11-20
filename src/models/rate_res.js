import _sequelize from "sequelize";
const { Model, DataTypes } = _sequelize;

export default class rate_res extends Model {
  static init(sequelize) {
    return super.init(
      {
        rate_res_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        res_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        amount: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        date_rate: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "rate_res",
        modelName: "rate_res",
        timestamps: false,
      }
    );
  }
}

