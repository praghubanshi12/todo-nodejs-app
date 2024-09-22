const express = require('express')
const todoRouter = require('./router/todo.router');
const bodyParser = require('body-parser');
const todoApiRouter = require('./router/api/todo.api.router');
const homeRouter = require('./router/home.router');
const config = require('./config.json').dev;
const CustomError = require('./error/CustomError');
const SingleRecordSaveValidationError = require('./error/SingleRecordSaveValidationError');
const BulkRecordSaveValidationError = require('./error/BulkRecordSaveValidationError');
const DBConfigError = require('./error/DBConfigError');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('assets'));

app.listen(config.port, () => {
  console.log(`app running at port ${config.port}`);
});

app.use('/', homeRouter);
app.use('/todo', todoRouter);
app.use('/api/todo', todoApiRouter, (err, req, res, errorHandler) => {
  if (err instanceof CustomError)
    return res.status(err.statusCode).json({ error: err.message });

  if (err instanceof SingleRecordSaveValidationError)
    return res.status(err.statusCode).json({ error: err.message, validationErrors: err.validationErrors });

  if (err instanceof BulkRecordSaveValidationError)
    return res.status(err.statusCode).json({ error: err.message, validationErrors: err.validationErrors });
  
  if (err instanceof DBConfigError) {
    return res.status(err.statusCode).json({ error: err.message, linkRef: err.linkRef });
  }

  res.status(500).json({ error: 'An unexpected error occurred' });
});



