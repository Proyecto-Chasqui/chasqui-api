// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const direcciones = sequelizeClient.define('DIRECCION', {
    calle: { type: DataTypes.STRING, allowNull: false },
    calleadyacente1: { type: DataTypes.STRING, allowNull: false },
    calleadyacente2: { type: DataTypes.STRING, allowNull: false },
    altura: { type: DataTypes.INTEGER, allowNull: false },
    localidad: { type: DataTypes.STRING, allowNull: false },
    codigo_postal: { type: DataTypes.STRING, allowNull: false },
    latitud: { type: DataTypes.STRING, allowNull: false },
    longitud: { type: DataTypes.STRING, allowNull: false },
    alias: { type: DataTypes.STRING, allowNull: false },
    predeterminada: { type: DataTypes.BOOLEAN, allowNull: false },
    geo_ubicacion: { type: DataTypes.GEOMETRY, allowNull: false },
    comentario: { type: DataTypes.STRING, allowNull: false },
    orden: { type: DataTypes.INTEGER, allowNull: false },
    provincia: { type: DataTypes.STRING, allowNull: false },
    pais: { type: DataTypes.STRING, allowNull: false },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  direcciones.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    direcciones.hasOne(models.DATA_CONTACTO,{ foreignKey: 'direccion_contacto'});
    direcciones.belongsTo(models.CLIENTE, {foreignKey: 'id_cliente'});
    direcciones.hasOne(models.PUNTO_DE_RETIRO,{ foreignKey: 'direccion'});
  };

  return direcciones;
};
