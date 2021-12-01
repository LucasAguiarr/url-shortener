const { linkRoutes } = require('../../modules/Links/routes/links.routes');
const Router = require('express');

const routes = Router();

routes.use(linkRoutes);

module.exports = { routes };
