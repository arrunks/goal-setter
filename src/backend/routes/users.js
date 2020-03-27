const controller = require('../controllers/users');
const validateToken = require('../utils').validateToken;
module.exports = (router) => {
    router.route('/users')
    .post(controller.add)
    .get(validateToken, controller.getAll);

    router.route('/user')
    .get(validateToken, controller.getUser);

    router.route('/login')
    .post(controller.login)
}