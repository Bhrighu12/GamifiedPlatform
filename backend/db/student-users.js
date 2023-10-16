const mongoose = require('mongoose');

const student_usersSchema = new mongoose.Schema({
    fullname:String,
    username:String,
    email:String,
    password:String,
    mobile:String,
    dob:String
});
module.exports= mongoose.model('student-users',student_usersSchema);