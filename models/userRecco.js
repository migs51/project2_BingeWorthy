module.exports = function(sequelize, DataTypes) {
    var userRecco = sequelize.define("userRecco", {
      users: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shows: {
        type: DataTypes.STRING,
        allowNull: false
      },
      bingeable: DataTypes.BOOLEAN
        
    });
}