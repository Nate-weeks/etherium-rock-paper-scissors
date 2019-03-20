const routes = require('next-routes')();

routes
  .add('/game/new', 'game/new')
  .add('/game/:address', '/game/show')

module.exports = routes;
