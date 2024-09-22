const config = require('../config.json').dev;

module.exports = {
    get: (req, res) => {
        fetch(`${config.baseUrl}/api/todo/filterCounts`)
            .then(async resp => {
                const data = await resp.json();
                if (data.error) return res.render('error/500', { error: { message: data.error, linkRef: data.linkRef } });
                res.render('dashboard', { filterCounts: data, page: 'dashboard' })
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