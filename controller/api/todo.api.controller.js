const TodoService = require("../../service/todo.service");

module.exports = {
    get: (req, res, handleErrorCb) => {
        TodoService.get(
            req,
            (resp) => res.json({ data: resp.data, filterCounts: resp.filterCounts }),
            (err) => handleErrorCb(err)
        );
    },
    save: (req, res, handleErrorCb) => {
        TodoService.save(
            req.body,
            () => res.json({ "message": "Todo created successfully" }),
            (err) => handleErrorCb(err)
        );
    },
    getById: (req, res, handleErrorCb) => {
        TodoService.getById(
            req.params.id,
            (data) => res.json(data),
            (err) => handleErrorCb(err)
        )
    },
    update: (req, res, handleErrorCb) => {
        TodoService.update(
            req.body,
            () => TodoService.get(req,
                (resp) => res.json({ ...resp, "message": "Updated Successfully" }),
                (err) => handleErrorCb(err)
            ),
            (err) => handleErrorCb(err)
        );
    },
    delete: (req, res, handleErrorCb) => {
        TodoService.delete(
            req.params.id,
            () => TodoService.get(req,
                (resp) => res.json({ ...resp, "message": "Deleted Successfully" }),
                (err) => handleErrorCb(err)
            ),
            (err) => handleErrorCb(err)
        )
    },
    deleteForDate: (req, res, handleErrorCb) => {
        TodoService.deleteForDate(
            { date: req.params.date, filter: req.query.filter },
            () => TodoService.get(req,
                (resp) => res.json({ ...resp, "message": "Deleted Successfully" }),
                (err) => handleErrorCb(err)
            ),
            (err) => handleErrorCb(err)
        )
    },
    getFilterCounts: (req, res, handleErrorCb) => {
        TodoService.getFilterCounts(
            (resp) => res.json({ ...resp }),
            (err) => handleErrorCb(err)
        )
    },
    saveDummy: (req, res, handleErrorCb) => {
        TodoService.saveDummy(
            () => res.json({ "message": "Dummy todo items data created successfully" }),
            (err) => handleErrorCb(err)
        );
    },
}