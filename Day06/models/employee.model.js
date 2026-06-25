const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: [true, "Employee ID is required"],
        unique: true
    },

    name: {
        type: String,
        required: [true, "Employee name is required"]
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true
    },

    salary: {
        type: Number,
        required: true,
        min: [0, "Salary cannot be negative"]
    },

    department: {
        type: String,
        required: [true, "Department is required"]
    }
});

module.exports = mongoose.model("Employee", employeeSchema);