const routes = require('next-routes')();

routes
  .add('/game/new', 'game/new')
  .add('game', '/game/show/:address', '/game/show')

module.exports = routes;
