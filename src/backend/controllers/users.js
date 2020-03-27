const mongoose = require('mongoose');
const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  add: (req, res) => {
    mongoose.connect(process.env.MONGO_LOCAL_CONN_URL, { useNewUrlParser : true,  useUnifiedTopology: true }, (err) => {
      let result = {};
      let status = 201;
      if (!err) {
        const { name, password, email, dob } = req.body;
        const user = new User({ name, password, email, dob }); // document = instance of a model
        // TODO: We can hash the password here before we insert instead of in the model
        user.save((err, user) => {
          if (!err) {
            result.status = status;
            result.result = user;
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
  login: (req, res) => {
    
    const { email, password } = req.body;
    console.log(email);
    mongoose.connect(process.env.MONGO_LOCAL_CONN_URL, { useNewUrlParser: true }, (err) => {
      let result = {};
      let status = 200;
      if(!err) {
        User.findOne({email}, (err, user) => {
          if (!err && user) {
            // We could compare passwords in our model instead of below as well
            bcrypt.compare(password, user.password).then(match => {
              if (match) {
                status = 200;
                // Create a token
                const payload = { _id: user._id };
                const options = { expiresIn: '2d', issuer: 'goal-setter' };
                const secret = process.env.JWT_SECRET;
                const token = jwt.sign(payload, secret, options);

                // console.log('TOKEN', token);
                result.token = token;
                result.status = status;
                result.result = user;
              } else {
                status = 401;
                result.status = status;
                result.error = `Authentication error`;
              }
              res.status(status).send(result);
            }).catch(err => {
              status = 500;
              result.status = status;
              result.error = err;
              res.status(status).send(result);
            });
          } else {
            status = 404;
            result.status = status;
            result.error = err;
            res.status(status).send(result);
          }
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
    mongoose.connect(process.env.MONGO_LOCAL_CONN_URL, { useNewUrlParser: true }, (err) => {
      User.find({}, (err, users) => {
        if (!err) {
          res.send(users);
        } else {
          console.log('Error', err);
        }
      });
    });
  },
  getUser: (req, res) => {
    const { _id } = req.decoded;
    mongoose.connect(process.env.MONGO_LOCAL_CONN_URL, { useNewUrlParser: true }, (err) => {
      User.findOne({_id}, (err, users) => {
        if (!err) {
          res.send(users);
        } else {
          console.log('Error', err);
        }
      });
    });
  }
}