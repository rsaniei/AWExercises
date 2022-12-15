const express = require("express");
const static = require("serve-static");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.use(static(__dirname +"/public"));

app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);

app.get("/", (req, res)=>{
  res.redirect("/tasks");
})


app.listen({path:hostname, port: port}, (error) =>{
  if(error) console.log("Error!");
  else console.log("Server is running on port 3000...");
})
