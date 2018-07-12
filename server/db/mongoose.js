var mongoose = require('mongoose');

// Setting mongoose promise system to built in promise system
mongoose.Promise = global.Promise;

// Connect to our environment variable URL
mongoose.connect(process.env.MONGODB_URI);
