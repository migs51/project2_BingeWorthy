module.exports = function(sequelize, DataTypes) {
  var Show = sequelize.define("Show", {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    genre: {
      type: DataTypes.TEXT
    },
    releaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    streamingService: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bingeRank: {
      type: DataTypes.INT
    },
    rating: {
      type: DataTypes.INT,
      allowNull: false
    }
  });
  return Show;
};
