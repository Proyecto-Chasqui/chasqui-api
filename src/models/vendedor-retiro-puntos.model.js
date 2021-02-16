// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const vendedorRetiroPuntos = sequelizeClient.define('PUNTO_DE_RETIRO', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.STRING },
    disponible: { type: DataTypes.INTEGER, allowNull: false },
    direccion: { type: DataTypes.INTEGER, allowNull: false },
    id_punto_de_retiro: { type: DataTypes.INTEGER, allowNull: false },
    indice: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  vendedorRetiroPuntos.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    vendedorRetiroPuntos.belongsTo(models.DIRECCION, { foreignKey: 'direccion' });
  };

  return vendedorRetiroPuntos;
};
