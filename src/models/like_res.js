import _sequelize from "sequelize";
const { Model, DataTypes } = _sequelize;

export default class like_res extends Model {
  static init(sequelize) {
    return super.init(
      {
        like_res_id: {
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
        date_like: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        dis_like: {
          type: DataTypes.BOOLEAN,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        tableName: "like_res",
        modelName: "like_res",
        timestamps: false,
      }
    );
  }
}

