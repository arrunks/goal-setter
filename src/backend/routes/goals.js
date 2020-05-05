const controller = require('../controllers/goals');
const validateToken = require('../utils').validateToken;
module.exports = (router) => {
    router.route('/goals')
    .post(validateToken,controller.add)
    .put(validateToken,controller.update)
    .delete(validateToken,controller.delete)
    .get(validateToken, controller.getAll);

}