const { Sequelize } = require('sequelize');
const { TodoItem, sequelize, syncTodoItemTable } = require('../model/todoitem.model');
const _ = require('lodash');
const DummyDataHelper = require('../helper/dummydata.helper');
const ErrorHandleHelper = require('../helper/errorhandle.helper');
const CustomError = require('../error/CustomError');

module.exports = {
    get: async (req, successcb, errorcb) => {
        syncTodoItemTable().then(() => {
            sequelize.query(generateQueryForGet(req.query.filter), {
                model: TodoItem,
                mapToModel: true
            }).then(resultSet => {
                getFilterCountsData()
                    .then(filterCountsData => {
                        if (!!!filterCountsData) { errorcb(ErrorHandleHelper.handleDBError(null, errorcb)); }
                        successcb({
                            data: groupTodoItemsArrayByDate(resultSet),
                            filterCounts: filterCountsData
                        });
                    }).catch(err => errorcb(ErrorHandleHelper.handleDBError(err)))
                }).catch(err => errorcb(ErrorHandleHelper.handleDBError(err)))
        }).catch(err => errorcb(ErrorHandleHelper.handleDBError(err)))
    },
    getById: (id, successcb, errorcb) => {
        syncTodoItemTable().then(() => {
            sequelize.query(`
                SELECT id, name, date, time, short_description, DATE_FORMAT(time, '%h:%i %p') AS time_formatted, is_done
                    FROM tbl_todo_items WHERE id = ${id};
            `, { model: TodoItem, mapToModel: true })
                .then(resultSet => {
                    if (resultSet.length == 0) {
                        errorcb(new CustomError("Not Found", 400));
                        return;
                    }
                    successcb(resultSet[0]);
                }).catch(err => errorcb(ErrorHandleHelper.handleDBError(err)))
        }).catch(err => errorcb(ErrorHandleHelper.handleDBError(err)))        
    },
    save: (formBody, successcb, errorcb) => {
        TodoItem.bulkCreate(formBody.todoItems, { validate: true })
            .then(result => successcb())
            .catch(err => errorcb(ErrorHandleHelper.handleDBError(err)))
    },
    update: (formBody, successcb, errorcb) => {
        TodoItem.update(formBody, { where: { id: formBody.id } })
            .then(result => {
                if(result == 0) {
                    errorcb(new CustomError("Not Found", 400)); 
                    return;
                }
                successcb();
            })
            .catch(err => errorcb(ErrorHandleHelper.handleDBError(err)))
    },
    delete: (id, successcb, errorcb) => {
        TodoItem.destroy({ where: { id } })
            .then(result => {
                if(result == 0) {
                    errorcb(new CustomError("Not Found", 400)); 
                    return;
                }
                successcb();
            })
            .catch(err => errorcb(ErrorHandleHelper.handleDBError(err)))
    },
    deleteForDate: (params, successcb, errorcb) => {
        const destroyConditions = { date: params.date };
        if (params.filter == 'done') destroyConditions.is_done = true;
        TodoItem.destroy({ where: destroyConditions })
            .then(result => successcb(result))
            .catch(err => errorcb(ErrorHandleHelper.handleDBError(err)))
    },
    getFilterCounts: (successcb, errorcb) => {
        getFilterCountsData()
            .then(result => successcb(result))
            .catch(err => errorcb(ErrorHandleHelper.handleDBError(err)))
    },
    saveDummy: (successcb, errorcb) => {
        TodoItem.bulkCreate(DummyDataHelper.generateDummyData())
            .then(result => successcb(result))
            .catch(err => errorcb(ErrorHandleHelper.handleDBError(err)))
    },
}

const generateQueryForGet = (filterValue) => {
    switch (filterValue) {
        case 'done':
            return `
                SELECT 
                    id, 
                    CASE WHEN LENGTH(name) > 20 THEN CONCAT(SUBSTRING(name, 1, 20), '...') ELSE name END AS name,
                    short_description, date, time, is_done,
                    DATE_FORMAT(time, '%h:%i %p') AS time_formatted
                FROM tbl_todo_items
                WHERE is_done
                ORDER BY date DESC, time DESC
            `;

        case 'upcoming':
            return `
                SELECT 
                    id, 
                    CASE WHEN LENGTH(name) > 20 THEN CONCAT(SUBSTRING(name, 1, 20), '...') ELSE name END AS name,
                    short_description, date, time, is_done,
                    DATE_FORMAT(time, '%h:%i %p') AS time_formatted
                FROM tbl_todo_items
                WHERE CONCAT(date, ' ', time) > now()
                ORDER BY date, time;
            `;

        default:
            return `SELECT 
                    id, 
                    CASE WHEN LENGTH(name) > 20 THEN CONCAT(SUBSTRING(name, 1, 20), '...') ELSE name END AS name,
                    short_description, date, time, is_done,
                DATE_FORMAT(time, '%h:%i %p') AS time_formatted,
                date < DATE(now()) AS is_past_date,
                CONCAT(date, ' ', time) > now() AS is_upcoming
            FROM tbl_todo_items
            ORDER BY is_past_date ASC, 
                CASE is_past_date WHEN 1 THEN date END DESC,
                CASE is_past_date WHEN 0 THEN date END ASC,
                CASE is_past_date WHEN 1 THEN time END DESC,
                CASE is_past_date WHEN 0 THEN time END ASC;`
    }
}

const getFilterCountsData = async () => {
    return new Promise((resolve, reject) => {
        syncTodoItemTable().then(() => {
            sequelize.query(`SELECT
                COUNT(id) AS all_count,
                COUNT(CASE WHEN is_done THEN 1 ELSE NULL END) AS done_count,
                COUNT(CASE WHEN CONCAT(date, ' ', time) > now() THEN 1 ELSE NULL END) AS upcoming_count
            FROM tbl_todo_items;
            `, { type: Sequelize.QueryTypes.SELECT })
            .then(filterCountResultSet => {
                if (filterCountResultSet.length !== 1) errorcb(ErrorHandleHelper.handleDBError(null))
                resolve({
                    all: filterCountResultSet[0].all_count,
                    done: filterCountResultSet[0].done_count,
                    upcoming: filterCountResultSet[0].upcoming_count,
                })
            }).catch(err => errorcb(ErrorHandleHelper.handleDBError(err)))
        }).catch(err => errorcb(ErrorHandleHelper.handleDBError(err)))
    })
}

const groupTodoItemsArrayByDate = (resultSet) => {
    return _.chain(resultSet)
        .groupBy("date")
        .map((value, key) => {
            const todoItems = value.map(item => ({
                id: item.id,
                name: item.name,
                shortDescription: item.shortDescription,
                timeFormatted: item.timeFormatted,
                time: item.time,
                isDone: item.isDone
            }));
            return { date: key, todoItems }
        })
        .value()
}