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
      type: DataTypes.INTEGER
    },
    imdbRanking: {
      type: DataTypes.DECIMAL
    },
    bingeRank: {
      type: DataTypes.INTEGER
    },
    webScraperRanking: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });
  return Rating;
}; 
