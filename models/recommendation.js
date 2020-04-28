module.exports = function(sequelize, DataTypes) {
  var Recommendation = sequelize.define("Recommendation", {
    users: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    shows: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    bingeable: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
  return Recommendation;
};
