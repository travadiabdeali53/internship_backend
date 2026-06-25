// Practice Question 2: Employee Management System


const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: [true, "Employee ID is required"],
        unique: true,
        trim: true
    },

    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true
    },

    salary: {
        type: Number,
        required: [true, "Salary is required"],
        min: [0, "Salary cannot be negative"]
    },

    department: {
        type: String,
        required: [true, "Department is required"]
    }
});

module.exports = mongoose.model("Employee", employeeSchema);