const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
const baseController = require('../controllers/index')


routes.get('/', baseController.getName);
routes.get('/hyrumRoute', lesson1Controller.hyrumRoute);
routes.get('/hunterRoute', lesson1Controller.hunterRoute);


module.exports = routes;