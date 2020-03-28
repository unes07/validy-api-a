const   express = require('express'),
        bodyParser = require('body-parser'),
        ejs = require('ejs'),
        methodeOverride = require('method-override'),
        seedDB = require('./seed'),
        db = require('./models');
const app = express();

// Admin ROUTES
const SectionARoutes = require('./routes/admin/section');
const CourseARoutes = require('./routes/admin/course');
const ChapitreARoutes = require('./routes/admin/chapitre');


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodeOverride("_method"));
// seedDB();

app.get('/', (req, res) => res.redirect('/admin'));

// ADMIN
app.use('/admin', SectionARoutes);
app.use('/admin', CourseARoutes);
app.use('/admin', ChapitreARoutes);



const port = 4000;
app.listen(port, () => console.log(`app listening on port ${port}!`))
