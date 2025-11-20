import _sequelize from "sequelize";
const { Model, DataTypes } = _sequelize;

export default class restaurant extends Model {
  static init(sequelize) {
    return super.init(
      {
        res_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        res_name: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        image: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        desciption: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "restaurant",
        modelName: "restaurant",
        timestamps: false,
      }
    );
  }
}

