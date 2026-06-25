const mongoose = require("mongoose");

const blogDataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true
    },

    content: {
        type: String,
        required: [true, "Content is required"]
    },

    author: {
        type: String,
        required: [true, "Author name is required"]
    },

    isPublished: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("BlogData", blogDataSchema);