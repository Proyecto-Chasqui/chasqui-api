const usuarios = require('./usuarios/usuarios.service.js');
const categorias = require('./categorias/categorias.service.js');
const vendedores = require('./vendedores/vendedores.service.js');
const productos = require('./productos/productos.service.js');
const caracteristicas = require('./caracteristicas/caracteristicas.service.js');
const productosVariantes = require('./productos-variantes/productos-variantes.service.js');
const clientes = require('./clientes/clientes.service.js');
const direcciones = require('./direcciones/direcciones.service.js');
const dataContacto = require('./data-contacto/data-contacto.service.js');
const pedidos = require('./pedidos/pedidos.service.js');
const productosPedido = require('./productos-pedido/productos-pedido.service.js');
const nodos = require('./nodos/nodos.service.js');
const pedidosColectivos = require('./pedidos-colectivos/pedidos-colectivos.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(usuarios);
  app.configure(categorias);
  app.configure(vendedores);
  app.configure(productos);
  app.configure(caracteristicas);
  app.configure(productosVariantes);
  app.configure(clientes);
  app.configure(direcciones);
  app.configure(dataContacto);
  app.configure(pedidos);
  app.configure(productosPedido);
  app.configure(nodos);
  app.configure(pedidosColectivos);
};
