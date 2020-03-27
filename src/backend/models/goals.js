const mongoose = require('mongoose');
//schema maps to a collection
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    title: {
        type: 'String',
        required: true,
        trim: true,
    },
    description: {
        type: 'String',
        required: true,
        trim: true
    },
    startedOn: {
      type: 'Date'
    },
    completedOn: {
      type: 'Date'
    },
    completed:false,
    dueOn:{
      type:'Date',
      required: true
    },
    authorId: {
      type: 'String',
      required: true
    }
},{timestamps:true});

module.exports = mongoose.model('Goal',goalSchema);