module.exports = function(sequelize, DataTypes) {
    var hbos = sequelize.define("hbos", {
      results_title: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      results_first_aired: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      bingeRank: {
        type: DataTypes.INTEGER
      },
      results_artwork_208x117: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
    return hbos;
  };
  