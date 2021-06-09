// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const vendedorRetiroZonas = sequelizeClient.define('ZONA', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    id_vendedor: { type: DataTypes.INTEGER, allowNull: false },
    fecha_cierre_pedidos: { type: DataTypes.DATE },
    descripcion: { type: DataTypes.STRING },
    geo_area: { type: DataTypes.GEOMETRY },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  vendedorRetiroZonas.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return vendedorRetiroZonas;
};
