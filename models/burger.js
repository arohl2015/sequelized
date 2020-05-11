module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    //per tutor do no need to create id -
    //this and other items are automatically created by sequelize
    burger_name: {
      type: DataTypes.STRING,
      // len is a validation that checks that our burger_name is between 1 and 150 characters
        validate: {
        len: [1, 150]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return burger;
};