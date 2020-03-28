const express = require('express'),
      router  = express.Router();
var db      = require("../../models");
var helpers = require("../../helpers/admin/chapitre");


router.route('/:SectionID/course/:CourseID/chapitres')
    .post(helpers.postChapInCourse)

router.route('/:SectionID/courses/:CourseID/chapitres/new')
    .get(helpers.getNewChap)

// router.route('/')
//     .get(helpers.getChapitres)
//     .post(helpers.createChapitre)

router.route('/:SectionID/courses/:CourseID/chapitres/:ChapitreID')
    .get(helpers.getChapitre)
    .put(helpers.updateChapitre)
    .delete(helpers.deleteChapitre)


module.exports = router;