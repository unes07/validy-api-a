const express = require('express'),
      router  = express.Router();
var db      = require("../../models");
var helpers = require("../../helpers/admin/section")

router.route('/')
    .get(helpers.getSections)
    .post(helpers.createSection)

router.route('/newsection')
    .get(helpers.getAddSection)

router.route('/section/editsection/:SectionID/')
    .get(helpers.getEditSection)

router.route('/section/:SectionID')
    .get(helpers.getSection)
    .put(helpers.updateSection)
    .delete(helpers.deleteSection)

module.exports = router;