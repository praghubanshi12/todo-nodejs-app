class SingleRecordSaveValidationError extends Error {
    constructor(error) {
        const validationErrors = [];
        error.errors.forEach(err => {
            if (!!validationErrors.find(validation => validation.field == err.path))
                return;
            validationErrors.push({
                fieldId: `input-${err.path}`,
                message: err.message
            });
        })
        super('Bad Request');
        this.statusCode = 400;
        this.validationErrors = validationErrors;
    }
}

module.exports = SingleRecordSaveValidationError;