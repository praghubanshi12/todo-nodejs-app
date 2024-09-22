const todoApiRouter = require('express').Router();
const TodoApiController = require('../../controller/api/todo.api.controller');

todoApiRouter.get('/', (req, res, handleErrorCb) => {
    TodoApiController.get(req, res, handleErrorCb);
});

todoApiRouter.get('/filterCounts', (req, res, handleErrorCb) => {
    TodoApiController.getFilterCounts(req, res, handleErrorCb);
});

todoApiRouter.get('/:id', (req, res, handleErrorCb) => {
    TodoApiController.getById(req, res, handleErrorCb);
});

todoApiRouter.post('/', (req, res, handleErrorCb) => {
    TodoApiController.save(req, res, handleErrorCb);
});

todoApiRouter.put('/', (req, res, handleErrorCb) => {
    TodoApiController.update(req, res, handleErrorCb);
});

todoApiRouter.delete('/:id', (req, res, handleErrorCb) => {
    TodoApiController.delete(req, res, handleErrorCb);
});

todoApiRouter.delete('/deleteForDate/:date', (req, res, handleErrorCb) => {
    TodoApiController.deleteForDate(req, res, handleErrorCb);
});

todoApiRouter.post('/dummy', (req, res, handleErrorCb) => {
    TodoApiController.saveDummy(req, res, handleErrorCb);
});

module.exports = todoApiRouter;

