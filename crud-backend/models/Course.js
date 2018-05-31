const mongoose = require('mongoose');
const CourseSchema = mongoose.Schema({

    CRSE_ID: {
        type: Number
    },
    ACAD_GROUPD: {
        type: String
    },
    SUBJECT: {
        type: String
    },
    CATALOG_NBR: {
        type: String
    },
    DESCR: {
        type: String
    },
    EFFDT: {
        type: String
    },

    EFF_STATUS: {
        type: String
    },
    EQUIV_CRSE_ID: {
        type: Number
    },

    CONSENT: {
        type: String
    },
    ALLOW_MULT_ENROLL: {
        type: String
    },

    UNITS_ACAD_PROG: {
        type: Number
    },
    CRSE_REPEATABLE: {
        type: String
    },
    UNITS_REPEAT_LIMIT: {
        type: Number
    },
    CRSE_REPEAT_LIMIT: {
        type: Number
    },
    GRADING_BASIS: {
        type: String
    },
    GRADE_ROASTER_PRINT: {
        type: String
    },
    SSR_COMPONENT: {
        type: String
    },
    COURSE_TITLE_LONG: {
        type: String
    },
    COMPONENT_PRIMARY: {
        type: String
    },
    DESCRLONG: {
        type: String
    }
});

const Course = module.exports = mongoose.model('Course', CourseSchema);