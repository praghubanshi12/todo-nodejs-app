class DBConfigError extends Error {
    constructor() {
        super("Please check the configuration.");
        this.statusCode = 500;
        this.linkRef = "https://www.github.com";
    }
}

module.exports = DBConfigError;