const {v4: uuidv4} = require("uuid");
const fs = require("fs");
const _ = require("lodash");

function getUsers(req, res) {
  let userDatabaseJSON = fs.readFileSync("./public/storage.json");
  const userJSON = JSON.parse(userDatabaseJSON);
  res.render("user", user = userJSON);

}

function getUserById(req, res){
  let userDatabaseJSON = fs.readFileSync("./public/storage.json");
  const userJSON = JSON.parse(userDatabaseJSON);
  // const task = taskJSON.filter(element => element.id === req.params.id);
  const user = _.find(userJSON,["id", req.params.id]);
  res.send(user);
}

function createUser(req, res) {

  console.log("new user is :", req.body.newuser);
  let newTask = {id: uuidv4(),  text: req.body.newuser, completed: false};
  let userDatabaseJSON =fs.readFileSync("public/storage.json");
  const userJSON = JSON.parse(userDatabaseJSON);
  console.log(userJSON);
  userJSON.push(newUser);
  fs.writeFile("./public/storage.json", JSON.stringify(userJSON, null, 2), (err)=>{
    if(err) console.log("Error");
    else console.log("User is added to the storage file!");
  })

  res.render("index", user = userJSON);

}

module.exports = {getUserById, getUsers, createUser}
