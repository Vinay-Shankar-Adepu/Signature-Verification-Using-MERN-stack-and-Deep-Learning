
const mongoose = require('mongoose');
const detailsSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    
});

const users = mongoose.model('details', detailsSchema);


module.exports =users;
