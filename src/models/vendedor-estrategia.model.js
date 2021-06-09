// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const vendedorEstrategia = sequelizeClient.define('ESTRATEGIA_DE_COMERCIALIZACION', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    permite_nodos: {type: DataTypes.BOOLEAN},
    permite_gcc: {type: DataTypes.BOOLEAN},
    permite_compra_individual: {type: DataTypes.BOOLEAN},
    permite_punto_de_entrega: {type: DataTypes.BOOLEAN},
    permite_elegir_direccion: {type: DataTypes.BOOLEAN},
    permite_nodos_app: {type: DataTypes.BOOLEAN},
    permite_compra_indiviudal_app: {type: DataTypes.BOOLEAN},
    permite_punto_de_entrega_app: {type: DataTypes.BOOLEAN},
    utiliza_incentivos: { type: DataTypes.BOOLEAN },
    permite_gcc_app: {type: DataTypes.BOOLEAN},
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  vendedorEstrategia.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    vendedorEstrategia.hasOne(models.VENDEDOR, { foreignKey: 'estrategias_utilizadas' });
  };

  return vendedorEstrategia;
};
