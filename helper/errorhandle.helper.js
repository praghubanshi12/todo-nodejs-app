const CustomError = require('../error/CustomError');
const BulkRecordSaveValidationError = require('../error/BulkRecordSaveValidationError');
const SingleRecordSaveValidationError = require('../error/SingleRecordSaveValidationError');
const DBConfigError = require('../error/DBConfigError');
module.exports = {
    handleDBError: (err) => {
        if (!!!err) {
            return new CustomError("Internal Server Error", 500);
        }
        if (err.original?.code == 'ER_BAD_DB_ERROR' || err.original?.code == 'ER_ACCESS_DENIED_ERROR' || err.original?.code == 'ENOTFOUND') {
            return new DBConfigError()
        }

        if (err.name == 'AggregateError') {
            return new BulkRecordSaveValidationError(err, ['date']);
        }

        if (err.name == 'SequelizeValidationError') {
            return new SingleRecordSaveValidationError(err);
        }
        return new CustomError("Internal Server Error", 500);
    }
}