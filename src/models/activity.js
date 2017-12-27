'use strict';
module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define('Activity', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    idMemberCreator: DataTypes.STRING,
    type: DataTypes.STRING,
    date: DataTypes.DATE,
    idBoard: DataTypes.STRING,
    idCard: DataTypes.STRING,
    name: DataTypes.STRING,
    idList: DataTypes.STRING,
    desc: DataTypes.STRING,
    descData: DataTypes.JSON,
    data: DataTypes.JSON,
    labels: DataTypes.JSON,
    closed: DataTypes.BOOLEAN,
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Activity;
};
