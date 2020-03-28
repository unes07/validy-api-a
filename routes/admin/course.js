const express = require('express'),
      router  = express.Router();
var db      = require("../../models");
var helpers = require("../../helpers/admin/course")

router.route('/:SectionID/courses')
    .get(helpers.getCoursesOfSection)
    .post(helpers.postCourseInSection)

router.route('/:SectionID/course/new')
    .get(helpers.getNewCourse)

router.route('/:SectionID/course/editcourse/:CourseID')
    .get(helpers.getEditCourse)

router.route('/:SectionID/course/:CourseID')
    .get(helpers.getCourse)
    .put(helpers.updateCourse)
    .delete(helpers.deleteCourse)




module.exports = router;