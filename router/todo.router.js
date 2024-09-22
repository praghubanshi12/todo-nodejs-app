const todoRouter = require('express').Router();
const TodoController = require('../controller/todo.controller');

todoRouter.get('/', (req, res) => {
    TodoController.get(req, res);
});

todoRouter.get('/create', (req, res) => {
    TodoController.create(req, res);
});

module.exports = todoRouter;

