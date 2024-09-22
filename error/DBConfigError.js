class DBConfigError extends Error {
    constructor() {
        super("Please check the configuration.");
        this.statusCode = 500;
        this.linkRef = "https://github.com/praghubanshi12/todo-nodejs-app/blob/main/README.md#database-configuration";
    }
}

module.exports = DBConfigError;