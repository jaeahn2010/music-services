//req rts in controllers folder
const clientRequestsCtrl = require('./controllers/client-requests');
const opusesCtrl = require('./controllers/opuses');

//req modules
require('dotenv').config();
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const methodOverride = require('method-override');

//req db connection, models, seed data
const db = require('./models');

//create express app
const app = express();

//refresh browser when nodemon restarts
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(express.static('public'));
app.use(connectLiveReload());
// body parser for POST/PUT/PATCH rts:
// take incoming strs from body (url encoded) -> parse them into obj to be accessed in req param as req.body
app.use(express.urlencoded({ extended: true }));
//interpret POST reqs from browser as diff req type: DELETE/PUT/etc
app.use(methodOverride('_method'));

//mount routes
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
});

// client-requests collection seeded (reset to orig seed) when GET req sent to '/seed'
app.get('/seed', function (req, res) {
    db.Opus.deleteMany({})
        .then(removedOpuses => {
            console.log(`Removed ${removedOpuses.deletedCount} opuses.`)
            db.Opus.insertMany(db.seedOpuses)
                .then(addedOpuses => {
                    console.log(`Added ${addedOpuses.length} opuses. Reset to original database.`)
                    res.json(addedOpuses)
                })
        })
    db.ClientRequest.deleteMany({})
        .then(removedRequests => {
            console.log(`Removed ${removedRequests.deletedCount} requests.`)
        })
});

// // err rt
// app.get('*', function (req, res) {
//     res.render('404');
// });

//for controllers
app.use('/client-requests', clientRequestsCtrl);
app.use('/opuses', opusesCtrl);

//listen to port 3000
app.listen(process.env.PORT, function () {
    console.log('Listening to port', process.env.PORT);
});