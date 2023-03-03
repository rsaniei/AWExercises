const Movies = require("../models/movies");

   async function getSearchResult(req, res)  {
    console.log("in post search");
    const {searchQuery} =  req.body;

    if(searchQuery){
      console.log(searchQuery);
      await Movies.aggregate([
  {
    '$search': {
      'index': 'movies-autocomplete',
      'autocomplete': {
        'query': searchQuery,
        'path': 'title'
      }
    }
  },

      {
        "$project":{
          "_id":0,
          "title": 1,
          "awards.wins":1,
          // "score": { "$meta": "searchScore" }
        }
      },
      {
        "$limit": 10,
      },
      {
        "$sort": {
          "awards.wins": -1
        }
      }
      ]

      )
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((error)=> console.log(error))
    }
  };

  module.exports = {getSearchResult};
