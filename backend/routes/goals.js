const controller = require('../controllers/goals');
const validateToken = require('../utils').validateToken;
module.exports = (router) => {
    router.route('/goals')
    .post(validateToken,controller.add)
    .get(validateToken, controller.getAll);

}