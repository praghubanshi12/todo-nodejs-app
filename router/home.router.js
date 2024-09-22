const homeRouter = require('express').Router();
const HomeController = require('../controller/home.controller');

homeRouter.get('/', (req, res) => {
    HomeController.get(req, res);
});

module.exports = homeRouter;