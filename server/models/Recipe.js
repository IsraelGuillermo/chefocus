// const { Sequelize } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    'Recipe',
    {
      photo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      servings: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      prep_time_hrs: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      pret_time_mins: {
        type: DataTypes.INTEGER,
        allowNull: true
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
