const { Router } = require('express');
const { CreateLinkController } = require('../controllers/CreateLinkController');
const { GetLinkController } = require('../controllers/GetLinkController');

const linkRoutes = Router();
const createLinkController = new CreateLinkController();
const getLinkController = new GetLinkController();

linkRoutes.post('/', createLinkController.handle);
linkRoutes.get('/:code', getLinkController.handle);

module.exports = { linkRoutes };
