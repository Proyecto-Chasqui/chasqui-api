// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const vendedores = sequelizeClient.define('VENDEDOR', {
    monto_minimo_pedido: { type: DataTypes.INTEGER, allowNull: false },
    nombre_vendedor: { type: DataTypes.STRING, allowNull: false },
    msj_cierre_pedido: { type: DataTypes.STRING, allowNull: false },
    distancia_compra_colectiva: { type: DataTypes.INTEGER, allowNull: false },
    mapa: { type: DataTypes.STRING, allowNull: false },
    url: { type: DataTypes.STRING, allowNull: false },
    nombre_corto_vendedor: { type: DataTypes.STRING, allowNull: false },
    estrategias_utilizadas: { type: DataTypes.INTEGER, allowNull: false },
    tiempo_vencimiento_pedidos: { type: DataTypes.INTEGER, allowNull: false },
    id_data_multimedia: { type: DataTypes.INTEGER, allowNull: false },
    visible_en_multicatalogo: { type: DataTypes.BOOLEAN, allowNull: false },
    ventas_habilitadas: { type: DataTypes.BOOLEAN, allowNull: false },
    mensaje_venta_deshabilitada: { type: DataTypes.BOOLEAN, allowNull: false },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  vendedores.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    vendedores.hasMany(models.CATEGORIA,{ foreignKey: 'id_vendedor'});
  };

  return vendedores;
};
