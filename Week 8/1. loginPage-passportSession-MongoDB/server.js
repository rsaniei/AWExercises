require('dotenv').config()
const express = require('express')
const app = express()

const methodOverride = require('method-override')
const flash = require('connect-flash')
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require("connect-mongo");
const handleErrors = require('./middleware/handleErrors')


app.set('view-engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true })) //to handle post requests
app.use(express.static("public"));
app.use(methodOverride('_method'));


app.use(session({
  secret: "Hello! we are happy today!",
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 60 * 60 * 1000 }, //maxAge = 1 hour in millisecond
  store: MongoStore.create({
    mongoUrl: process.env.DB_SERVER,
    collection: "sessions"
  })
}))
 app.use(passport.initialize());
 app.use(passport.session());
 app.use(flash());

app.use('/', authRoutes);


app.use(handleErrors);

mongoose.connect(process.env.DB_SERVER, {useNewUrlParser: true})
.then(() => {
  console.log("Connected to the DB...");
  app.listen(process.env.PORT, "localhost", (err) =>{
    if(err) console.log("Server could not be started" + err.message);
    else console.log(`Server listening on port ${process.env.PORT}...`);
  })

})
.catch(err => {
  console.log(err.message);
})
