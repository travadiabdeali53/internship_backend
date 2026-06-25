const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full Name is required"],
        trim: true
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true
    },

    age: {
        type: Number,
        required: true,
        min: [17, "Student age must be greater than 17"]
    },

    course: {
        type: String,
        required: [true, "Course is required"]
    }
});

module.exports = mongoose.model("Student", studentSchema);