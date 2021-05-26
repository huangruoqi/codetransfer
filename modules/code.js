const mongoose = require('mongoose');

let codeSchema = new mongoose.Schema({
    filename: String,
    code: String
})

let Code = module.exports = mongoose.model('code', codeSchema);
