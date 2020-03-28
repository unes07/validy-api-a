var mongoose = require('mongoose');
var Chapitre = require("./chapitre");

var courseSchema = new mongoose.Schema({
    section_name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section'
    },
    courseName: {
        type: String
    },
    sousTitre: {
        type: String
    },
    description: {
        type: String
    },
    chapitres: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chapitre'
        }
    ],
    courseCreatedBy: {
        type: String,
        default: 'BitScript'
    },
    created_at_cou: {
        type: Date,
        default: Date.now
    }
});

courseSchema.pre('remove', async function(next) {
    try {
        await Chapitre.remove({
            "_id": {
                $in: this.chapitres
            }
        });
        next();
    } catch (err) {
        next(err);
    }
});

var Course = mongoose.model('Course', courseSchema);
module.exports = Course;