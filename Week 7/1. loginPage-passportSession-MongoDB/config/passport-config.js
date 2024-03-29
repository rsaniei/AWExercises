const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require("../models/users")

function initialize(passport) {

  const customFields = { //default : username, password
    usernameField: "email",
    passwordField: "password",
  };

  //This is the callback function that goes inside localstrategy setup
  const authenticateUser = async (email, password, done) => {
    const user = await User.findOne({email: email})

    if (!user) {
      return done(null, false, { message: 'No user with that email' })
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Password incorrect' })
      }
    } catch (e) {
      return done(e)
    }
  }

  passport.use(new LocalStrategy(customFields, authenticateUser))

  //save user.id in our session
  passport.serializeUser((user, done) => {
    return done(null, user.id) //DB Error, user, error message
  })
  //get the id and retrieve the user
  passport.deserializeUser(async (id, done) => {
    const user = await User.findOne({_id: id})
    return done(null, user);
  })
}

module.exports = initialize;
