import _sequelize from "sequelize";
const { Model, DataTypes } = _sequelize;

export default class food extends Model {
  static init(sequelize) {
    return super.init(
      {
        food_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        food_name: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        image: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        desciption: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        type_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "food",
        modelName: "food",
        timestamps: false,
      }
    );
  }
}

