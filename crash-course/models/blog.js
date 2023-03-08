const mongoose = require('mongoose');
const Schema = mongoose.Schema; // define structure doc store in db

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema) //look Blog name and plularize with database to comm into db
module.exports = Blog // use somewhere