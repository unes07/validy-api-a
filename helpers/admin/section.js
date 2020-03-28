var db = require('../../models');

exports.getSections = function(req, res){
    db.Section.find()
    .populate({ 
        path: 'courses',
        populate: {
          path: 'chapitres',
          options: { sort: {chapitreNumber : 1 }}
        } 
     })
    .then(function(Sections){
        res.render("admin/indexAdmin",{Sections: Sections});
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.getAddSection = function(req, res){
    res.render('admin/newsection');
}

exports.createSection = function(req, res){
    db.Section.create(req.body)
    .then(function(Section){
        res.render('admin/newcourse', {Section: Section})
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.getSection = function(req, res){
    db.Section.findById(req.params.SectionID)
    .populate({ 
        path: 'courses',
        populate: {
            path: 'chapitres',
            options: { sort: {chapitreNumber : 1 }}
        } 
     })
    .then(function(Section){
        res.render('admin/tcourses', {Section: Section})
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.getEditSection = function(req, res){
    db.Section.findById(req.params.SectionID)
    .populate({ 
        path: 'courses',
        populate: {
            path: 'chapitres',
            options: { sort: {chapitreNumber : 1 }}
        } 
     })
    .then(function(Section){
        res.render('admin/editsection', {Section: Section})
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.updateSection = function(req, res){
    db.Section.findByIdAndUpdate({_id: req.params.SectionID}, req.body)
    .then(function(){
        res.redirect('/admin//section/' + req.params.SectionID)
    })
    .catch(function(err){
        res.send(err);
    })
}

// exports.deleteSection = function(req, res){
//     db.Section.remove({_id: req.params.SectionID})
//     .then(function(){
//         db.Section.Courses.remove({_id: req.params.SectionID})
//             .then(function(){
//                 res.json({message: "Deleted"})
//             })
//             .catch(function(){
//                 res.send(err)
//             })
//         .catch(function(){
//             res.send(err)
//         })
//     })
//     .catch(function(err){
//         res.send(err)
//     })
// }

exports.deleteSection = function(req, res, next){
    db.Section.findById(req.params.SectionID, function(err, section){
        db.Course.remove({
            "_id": {
                $in: section.courses
            }
        }, function(err) {
            if(err) return next(err);
            section.remove();
            res.redirect('/admin')
        })
    })
}

// exports.deleteSection = function(req, res, next){
//     db.Section.findById(req.params.SectionID, function(err, section){
//         if(err) {
//             console.log(err)
//         } else {
//             section.courses.forEach(chapitre => {
//                 chapitre.chapitre.remove();
//             })
//             .then(
//                 db.Course.remove({
//                     "_id": {
//                         $in: section.courses
//                     }
//                 }, function(err) {
//                     if(err) return next(err);
//                     section.remove();
//                     res.redirect('/admin');
//                 })
//             )
//             .catch(function(err){
//                 console.log(err)
//             })
//         }
//     }
//     )}

// exports.deleteSection = function(req, res, next){
//     db.Section.findById(req.params.SectionID, function(err, section){
//         db.Course.remove({
//             "_id": {
//                 $in: section.courses
//             }
//         }, function(err) {
//             if(err) return next(err);
//             section.remove();
//             res.redirect('/admin')
//         }))
//     }
// }

module.exports = exports;