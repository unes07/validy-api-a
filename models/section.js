var mongoose = require('mongoose');

var sectionSchema = new mongoose.Schema({
    sectionName: {
        type: String,
        required: 'Section Name cannot be blank!'
    },
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ],
    created_at_sec: {
        type: Date,
        default: Date.now
    }
});

var Section = mongoose.model('Section', sectionSchema);
module.exports = Section;


// const Course = require('./course');
// sectionSchema.pre('remove', async function(next) {
//     try {
//         await Course.remove({
//             "_id": {
//                 $in: this.Course
//             }
//         });
//         next();
//     } catch (err) {
//         next(err);
//     }
// });