const { Schema, model } = require('mongoose');

const newsSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [3, 'Title must be at least 3 characters long'],
        maxlength: [100, 'Title cannot exceed 100 characters'],
        trim: true, // Trim whitespaces
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [10, 'Description must be at least 10 characters long'],
        maxlength: [9000000, 'Description cannot exceed 900000 characters'],
        trim: true, // Trim whitespaces
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        minlength: [3, 'Author must be at least 3 characters long'],
        maxlength: [50, 'Author cannot exceed 50 characters'],
        trim: true, // Trim whitespaces
    },
    tag: {
        type: String,
        required: [true, 'Tag is required'],
        minlength: [3, 'Tag must be at least 3 characters long'],
        maxlength: [300, 'Tag cannot exceed 300 characters'],
        trim: true, // Trim whitespaces
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
        minlength: [3, 'Image must be at least 3 characters long'],
        maxlength: [100, 'Image cannot exceed 100 characters'],
        trim: true, // Trim whitespaces
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    views: {
        type: Number,
        default: 0,
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

const News = model('News', newsSchema);

module.exports = News;
