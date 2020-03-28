const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/validy', { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.Promise = Promise;

module.exports.Section = require('./section');
module.exports.Course = require('./course');
module.exports.Chapitre = require('./chapitre');