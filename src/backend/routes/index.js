const users = require('./users');
const goals = require('./goals');

module.exports = (router) => {
    users(router);
    goals(router);
    return router;
}