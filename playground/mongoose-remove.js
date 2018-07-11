const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({text: 'go to bed'}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('5b468c3c5277c62c1b7420b8').then((todo) => {
    console.log(todo);
});