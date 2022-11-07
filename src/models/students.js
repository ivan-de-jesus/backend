const { Schema, model } = require("mongoose");

const AddStudentSchema = new Schema({
   name: String,
   albumNumerus: Number,
   gradus: String,
   group: String,
   age: Number,
   pass: String
})

module.exports = model('students', AddStudentSchema);

