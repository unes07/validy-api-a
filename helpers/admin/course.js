var db = require('../../models');

exports.getCoursesOfSection = function(req, res){
    db.Section.findById(req.params.SectionID)
    .populate({ 
        path: 'courses',
        populate: {
          path: 'chapitres',
          options: { sort: {chapitreNumber : 1 }}
        } 
     })
    .then(function(section){
        db.Course.find()
        .then(function(Courses){
            res.json(section.courses)
        })
        .catch(function(err){
            res.send(err)
        })
    })
    .catch(function(err){
        console.log(err)
    });
}

exports.getNewCourse = function(req, res){
    db.Section.findById(req.params.SectionID)
    .populate({ 
        path: 'courses',
        populate: {
          path: 'chapitres',
        } 
     })
    .then(function(Section){
        res.render('admin/newcourse', {Section: Section});
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.postCourseInSection = function(req, res){
    db.Section.findById(req.params.SectionID)
    .then(function(section){
        db.Course.create(req.body.course, function(err, course){
            if(err){
                console.log(err);
            } else {
                section.courses.push(course);
                section.save();
                res.render('admin/newchap', {course: course, section: section});
            }
        })
    })
    .catch(function(err){
        console.log(err)
    });
}

exports.getCourse = function(req, res){
    db.Course.findById(req.params.CourseID)
    .populate({
        path: 'chapitres',
        options: { sort: {chapitreNumber : 1 }}
    })
    .then(function(Course){
        res.render("admin/tchapitres" ,{Course: Course});
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.getEditCourse = function(req, res){
    db.Section.findById(req.params.SectionID)
    .then(function(section){
        db.Course.findById(req.params.CourseID)
        .populate({ 
            path: 'chapitres',
            options: { sort: {chapitreNumber : 1 }}
            })
        .then(function(Course){
            res.render('admin/editcourse', {section: section, Course: Course})
        })
        .catch(function(err){
            res.send(err);
        })
    })
    .catch(function(err){
        console.log(err)
    });
}

exports.updateCourse = function(req, res){
    db.Section.findById(req.params.SectionID)
    .then(function(section){
        db.Course.findOneAndUpdate({_id: req.params.CourseID}, req.body)
        .then(function(Course){
            res.redirect('/admin//section/' + req.params.SectionID)
        })
        .catch(function(err){
            res.send(err);
        })
    })
    .catch(function(err){
        console.log(err)
    });
}

exports.deleteCourse = function(req, res, next){
    db.Course.findById(req.params.CourseID, function(err, course) {
        if(err) return next(err);

        course.remove();
        res.redirect('/admin');
    });
}

// db.Course.remove({_id: req.params.CourseID})
// .then(function(){
//     res.json({message: "Deleted"})
// })
// .catch(function(err){
//     res.send(err)
// })

module.exports = exports;