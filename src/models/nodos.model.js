// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const nodos = sequelizeClient.define('NODO', {
    estado: { type: DataTypes.STRING },
    tipo: { type: DataTypes.STRING },
    emailadmin: { type: DataTypes.STRING },
    id_direccion: { type: DataTypes.INTEGER },
    barrio: { type: DataTypes.STRING },
    activo: { type: DataTypes.BOOLEAN, allowNull: false },
    id_zona: { type: DataTypes.INTEGER },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  nodos.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return nodos;
};
