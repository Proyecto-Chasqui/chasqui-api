// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const medallas = sequelizeClient.define('CARACTERISTICA', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    eliminada: { type: DataTypes.BOOLEAN, allowNull: false },
    descripcion: { type: DataTypes.STRING, allowNull: false },
    path_imagen: { type: DataTypes.STRING, allowNull: false },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  medallas.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    medallas.belongsToMany(models.PRODUCTO, {through: 'PRODUCTO_CARACTERISTICA', foreignKey: 'id_producto_caracteristica' });
  };

  return medallas;
};
