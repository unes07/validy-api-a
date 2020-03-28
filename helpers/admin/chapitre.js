var db = require('../../models');

exports.getNewChap = function(req, res){
    db.Section.findById(req.params.SectionID)
    .populate({ 
        path: 'courses',
        populate: {
          path: 'chapitres',
        } 
     })
    .then(function(section){
        db.Course.findById(req.params.CourseID)
        .then(function(course){
            res.render('admin/newchap', {course: course, section: section});
        })
        .catch(function(err){
            res.send(err);
        })
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.postChapInCourse = function(req, res){
    db.Course.findById(req.params.CourseID)
    .then(function(course){
        db.Chapitre.create(req.body.chapitre, function(err, chapitre){
            if(err){
                console.log(err);
            } else {
                course.chapitres.push(chapitre);
                course.save();
                res.redirect('/admin');
            }
        })
    })
    .catch(function(err){
        console.log(err)
    });
}

exports.getChapitre = function(req, res){
    db.Chapitre.findById(req.params.ChapitreID)
    .then(function(foundChapitre){
        res.json(foundChapitre)
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.updateChapitre = function(req, res){
    db.Chapitre.findOneAndUpdate({_id: req.params.ChapitreID}, req.body, {new: true})
    .then(function(Chapitre){
        res.json(Chapitre)
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.deleteChapitre = function(req, res){
    db.Chapitre.remove({_id: req.params.ChapitreID})
    .then(function(){
        res.json({message: "Deleted"})
    })
    .catch(function(err){
        res.send(err)
    })
}

module.exports = exports;