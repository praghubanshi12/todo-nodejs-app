class BulkRecordSaveValidationError extends Error {
    constructor(error, nonBulkFields = []) {
        const validationErrors = [];
        error.errors.forEach(err => {
            err.errors.errors.forEach(validationErrorItem => {
                if (
                    validationErrors.find(validation => {
                        if (validation.field == validationErrorItem.path && validation.index == validationErrorItem.instance.dataValues.index)
                            return true;

                        if (validation.field == validationErrorItem.path && nonBulkFields.includes(validation.field))
                            return true;
                    })
                ) return;

                validationErrors.push({
                    field: validationErrorItem.path,
                    index: nonBulkFields.includes(validationErrorItem.path) ? '' : validationErrorItem.instance.dataValues.index,
                    message: validationErrorItem.message
                });
            })
        })
        super('Bad Request');
        this.statusCode = 400;
        this.validationErrors = validationErrors;
    }
}

module.exports = BulkRecordSaveValidationError;