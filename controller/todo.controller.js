const config = require('../config.json').dev;

module.exports = {
    get: (req, res) => {
        fetch(`${config.baseUrl}/api/todo?filter=${req.query.filter}`)
            .then(async resp => {
                const data = await resp.json();
                if (data.error) return res.render('error/500', { error: { message: data.error, linkRef: data.linkRef } });
                res.render('todo/index', {...data, filter: req.query.filter, page: 'todo'})
            }).catch(err => {
                return res.render('error/500', {
                    error: {
                        message: err.error || 'Internal Server Error',
                        linkRef: err.linkRef
                    }
                });
            });
    },
    create: (req, res) => {
        fetch(`${config.baseUrl}/api/todo/filterCounts`)
            .then(async testDataResp => {
                const data = await testDataResp.json();
                if (data.error) return res.render('error/500', { error: { message: data.error, linkRef: data.linkRef } });
                res.render('todo/create', {page: 'todo'});
            }).catch(err => {
                return res.render('error/500', {
                    error: {
                        message: err.error || 'Internal Server Error',
                        linkRef: err.linkRef
                    }
                });
            });
    }
}