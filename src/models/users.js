import _sequelize from "sequelize";
const { Model, DataTypes } = _sequelize;

export default class users extends Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        full_name: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        email: {
          type: DataTypes.STRING(50),
          allowNull: true,
          unique: true,
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "users",
        modelName: "users",
        timestamps: false,
      }
    );
  }
}

