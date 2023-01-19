const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const studentSchema = new Schema({
    code: {
        type: String,
        required: true,
        // unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    fname: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
    },
    address: {
        type: String,
    },
    tel: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    region: {
        type: String,
    },
    district: {
        type: String,
    },
    commune: {
        type: String,
    },
}, { timestamps: true });







module.exports = mongoose.model('student', studentSchema);