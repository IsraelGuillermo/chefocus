// const { Sequelize } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    'Recipe',
    {
      UserId : {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: true,
        default: DataTypes.STRING
      },
      recipeName: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        default: DataTypes.STRING
      },
      servings: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      prepHours: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      prepMinutes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ingredients: {
        type: DataTypes.STRING,
        allowNull: false
      },
      instructions: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      underscored: true
    }
  );

  Recipe.associate = (models) => {
    // Had to update this in order to get the FK to update
    // Order.belongsTo(models.supplier, { foreignKey: 'supplier_id' });
    Recipe.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Recipe;
};
