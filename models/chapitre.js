var mongoose = require('mongoose');

var chapitreSchema = new mongoose.Schema({
    courseName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    chapitreName: {
        type: String
    },
    chapitreNumber: {
        type: Number,
        unique: true,
        default: 0
    },
    article: {
        type: String,
    },
    created_by_art: {
        type: String,
        default: 'BitScript'
    },
    created_at_art: {
        type: Date,
        default: Date.now
    }
});

var Chapitre = mongoose.model('Chapitre', chapitreSchema);

module.exports = Chapitre;