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

// Detect if running in a dev environment
if (process.env.ON_HEROKU === 'false') {
    // Configure the app to refresh the browser when nodemon restarts
    const liveReloadServer = livereload.createServer();
    liveReloadServer.server.once("connection", () => {
        // wait for nodemon to fully restart before refreshing the page
        setTimeout(() => {
        liveReloadServer.refresh("/");
        }, 100);
    });
    app.use(connectLiveReload());
}

// Body parser: used for POST/PUT/PATCH routes: 
// this will take incoming strings from the body that are URL encoded and parse them 
// into an object that can be accessed in the request parameter as a property called body (req.body).
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
// Allows us to interpret POST requests from the browser as another request type: DELETE, PUT, etc.
app.use(methodOverride('_method'));


//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//mount rts
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
});

// opus collection seeded (reset to orig seed) w/ '/seed'
if (process.env.ON_HEROKU === 'false') {
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
}
//for controllers
app.use('/client-requests', clientRequestsCtrl);
app.use('/opuses', opusesCtrl);

// err rt
app.get('*', function (req, res) {
    res.render('404');
});

//listen to port 3000
app.listen(process.env.PORT, function () {
    console.log('Listening to port', process.env.PORT);
});