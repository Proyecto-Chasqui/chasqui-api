// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const productores = sequelizeClient.define('PRODUCTOR', {
    nombre: { type: DataTypes.STRING },
    calle: { type: DataTypes.STRING },
    pais: { type: DataTypes.STRING },
    provincia: { type: DataTypes.STRING },
    localidad: { type: DataTypes.STRING },
    altura: { type: DataTypes.INTEGER },
    imagen: { type: DataTypes.STRING },
    descripcion_corta: { type: DataTypes.STRING },
    descripcion_larga: { type: DataTypes.STRING },
    id_vendedor: { type: DataTypes.INTEGER },
    id_caracteristica: { type: DataTypes.INTEGER },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  productores.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return productores;
};
