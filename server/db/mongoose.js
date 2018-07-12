var mongoose = require('mongoose');

// Setting mongoose promise system to built in promise system
mongoose.Promise = global.Promise;

// Connect to our environment variable URL (set by server) or the localhost URL
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};