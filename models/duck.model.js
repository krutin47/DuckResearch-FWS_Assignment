/**
 * @file Duck schema.
 * @author Krutin Trivedi
 */

//importing Components & required Modules
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//defining the schema for the collection
const duckSchema = new Schema({
    //_id: mongoose.Schema.Types.ObjectId, // mongoose Type objectId is used for generating unique ID's
    firstName:{
        type: String,
        required: true,
        trim: true,
        minlength: 3 
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    location: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    time:{
        type: String,
        required: true,
        trim: true,
        minlength: 3 
    },
    duckCount: {
        type: Number,
        require: true,
        minlength: 1
    },
    food:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    foodCount:{
        type: Number,
        require: true,
        trim: true,
        minlength: 1
    }
}, {
    timestamps: true,
});

//exporting the schema as User
module.exports = mongoose.model('duck', duckSchema);