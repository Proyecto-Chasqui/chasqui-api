// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const clientes = sequelizeClient.define('CLIENTE', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    apellido: { type: DataTypes.STRING, allowNull: false },
    telefono_fijo: { type: DataTypes.STRING, allowNull: false },
    telefono_movil: { type: DataTypes.STRING, allowNull: false },
    dispositivo: { type: DataTypes.STRING, allowNull: false },
    rol: { type: DataTypes.STRING, allowNull: false },
    token: { type: DataTypes.STRING, allowNull: false },
    estado: { type: DataTypes.STRING, allowNull: false },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  clientes.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    clientes.hasMany(models.PEDIDO,{ foreignKey: 'cliente'});
    clientes.hasMany(models.DIRECCION,{ foreignKey: 'id_cliente'});
  };

  return clientes;
};
