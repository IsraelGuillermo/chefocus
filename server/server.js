const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const firebase = require("firebase")
require("firebase/storage")

const db = require('./models');
const routes = require('./routes');
const passport = require('./config/passport');
const corsOptions = require('./config/cors.js');

const PORT = process.env.PORT || 3001;
const app = express();

const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGESENDER,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID
};

// init firebase
firebase.initializeApp(firebaseConfig);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(session({ secret: 'TBD', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));

console.log(process.env.NODE_ENV);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
}

// Add routes, API
app.use(routes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// Dynamically force schema refresh only for 'test'
const FORCE_SCHEMA = process.env.NODE_ENV === 'test';

db.sequelize
  .authenticate()
  .then(() => {
    db.sequelize.sync({ force: FORCE_SCHEMA }).then(() => {
      app.listen(PORT, (err) => {
        if (err) throw err;
        console.log(
          `🌎 Server is Ready and Listening on http://localhost:${PORT}`
        ); // eslint-disable-line no-console
      });
    });
  })
  .catch(console.error); // eslint-disable-line no-console

module.exports = app;
