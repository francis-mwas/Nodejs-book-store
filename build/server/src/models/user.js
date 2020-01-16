'use strict';

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

  User.associate = function (models) {// associations can be defined here
  };

  return User;
};
//# sourceMappingURL=user.js.map