//req rts in controllers folder
const clientRequestsCtrl = require('./controllers/client-requests')

//req modules
require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

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
app.use(express.static('public'))
app.use(connectLiveReload());

//mount routes
app.get('/', function (req, res) {
    res.send('testing: music services')
});
// client-requests collection seeded (reset to orig seed) when GET req sent to '/seed'
app.get('/seed', function (req, res) {
    db.ClientRequest.deleteMany({})
        .then(removedRequests => {
            console.log(`Removed ${removedRequests.deletedCount} requests.`)
            db.ClientRequest.insertMany(db.seedClientRequests)
                .then(addedRequests => {
                    console.log(`Added ${addedRequests.length} requests. Reset to original database.`)
                    res.json(addedRequests)
                })
        })
});
app.use('/client-requests', clientRequestsCtrl)

// listen to port 3000
app.listen(process.env.PORT, function () {
    console.log('Listening to port', process.env.PORT);
});

