const pool = require('../config/db');

function getTODOs(req, res) {

  try{
    const allTodos = pool.query("SELECT * FROM todo");
    res.json(allTodos.rows)
  }
  catch(err){
    console.log(erro);
  }

}

module.exports = {getTODOs};
