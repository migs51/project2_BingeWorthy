module.exports = function(sequelize, DataTypes) {
  var Rating = sequelize.define("Rating", {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    rottenTomatoesRanking: {
      type: DataTypes.INT
    },
    imdbRanking: {
      type: DataTypes.DECIMAL
    },
    bingeRank: {
      type: DataTypes.INT
    },
    webScraperRanking: {
      type: DataTypes.INT,
      allowNull: true
    }
  });
  return Rating;
};
