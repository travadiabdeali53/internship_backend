// Practice Question 3: Blog Post Model

const mongoose = require("mongoose");

const blogDataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [5, "Title must be at least 5 characters"]
    },

    content: {
        type: String,
        required: [true, "Content is required"],
        minlength: [50, "Content must be at least 50 characters"]
    },

    author: {
        type: String,
        required: [true, "Author is required"]
    },

    isPublished: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("BlogData", blogDataSchema);