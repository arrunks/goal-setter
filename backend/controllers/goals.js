const mongoose = require('mongoose');
const Goal = require('../models/goals');

const connUri = process.env.MONGO_LOCAL_CONN_URL;

module.exports = {
  add: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser : true,  useUnifiedTopology: true }, (err) => {
      let result = {};
      let status = 201;
      if (!err) {
        const { title, description, authorId, dueOn} = req.body;
        const goal = new Goal({ title, description, authorId, dueOn }); // document = instance of a model
        // TODO: We can hash the password here before we insert instead of in the model
        goal.save((err, goal) => {
          if (!err) {
            result.status = status;
            result.result = goal;
          } else {
            status = 500;
            result.status = status;
            result.error = err;
          }
          res.status(status).send(result);
        });
      } else {
        status = 500;
        result.status = status;
        result.error = err;
        res.status(status).send(result);
      }
    });
  },
  getAll: (req, res) => {
    const { authorid } = req.query;
    console.log(authorid);
    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      Goal.find({authorId:authorid}, (err, goals) => {
        if (!err) {
          res.send(goals);
        } else {
          console.log('Error', err);
        }
      });
    });
  }
}