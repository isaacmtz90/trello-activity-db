
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Activities', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      idMemberCreator: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      idBoard: {
        type: Sequelize.STRING,
      },
      idCard: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      idList: {
        type: Sequelize.STRING,
      },
      desc: {
        type: Sequelize.STRING,
      },
      descData: {
        type: Sequelize.JSON,
      },
      data:{
        type: Sequelize.JSON,
      },
      labels: {
        type: Sequelize.JSON,
      },
      closed: {
        type: Sequelize.BOOLEAN,
      },
      url: {
        type: Sequelize.STRING,
      },
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Activities');
  },
};
