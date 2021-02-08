// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const dataContacto = sequelizeClient.define('DATA_CONTACTO', {
    telefono: {type: DataTypes.STRING },
    celular: {type: DataTypes.STRING },
    email: {type: DataTypes.STRING },
    url: {type: DataTypes.STRING },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  dataContacto.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    dataContacto.belongsTo(models.DIRECCION, {foreignKey: 'direccion_contacto'});
  };

  return dataContacto;
};
