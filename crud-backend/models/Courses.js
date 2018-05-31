const mongoose = require('mongoose');
const CoursesSchema = mongoose.Schema({
    COURSE_ID: {
        type: String
    },
    OFFERED_FALL: {
        type: String
    },
    OFFERED_WINTER: {
        type: String
    },
    OFFERED_SPRING: {
        type: String
    },
    OFFERED_SUMMER: {
        type: String
    },
    PREREQS: {
        type: String
    },
    ONLINE: {
        type: String
    }
});
const Courses = module.exports = mongoose.model('Courses', CoursesSchema);