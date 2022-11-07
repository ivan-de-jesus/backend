const { Schema, model } = require("mongoose");

const AddExercisesSchema = new Schema({
    number: Number,
    exercise: String,
    instruction: String,
    help: String
    
})

module.exports = model('exercises', AddExercisesSchema);
