
//the goal of this file is to take in an existing array of tv shows
//categorized by subscription and filter them by ratings
//to make finalized list
 const axios = require('axios');

const fs = require("fs");

//run the code with different subscriptions each time and change the file name
//each time
//OMDB API
//'http://www.omdbapi.com/?apikey=[a0a7442c]'



//import variable from somewhere else, temp below

const BingeShows = ["Psych","Family Guy"];
let acceptedshows = [];
let Show;
//API call here
function getShow(Title) {
  
  axios.get('http://www.omdbapi.com/', {
    params: {
      'apikey': "a0a7442c",
      't': Title
    }
  })
  .then(function (response) {
    //media response stats
    // console.log(response.data);

    //Show includes in order: 
    //show0=type of media   show1=title     show2=poster
    //show3=genres          show4=#seasons  show5=metascore(0-100)
    //show6=imdb(0-10)      show7=synopsis
    Show = [response.data.Type, response.data.Title, response.data.Poster, 
      response.data.Genre, response.data.totalSeasons, response.data.Metascore, 
      response.data.imdbRating,response.data.Plot];
    
      if (parseInt(Show[5]) > 80 || parseFloat(Show[6]) > 8) {
      //add imported show to
      acceptedshows.push(Show);
      // console.log(Show);
      console.log(acceptedshows);
      fs.writeFile('helloworld.txt', JSON.stringify(acceptedshows), function (err) {
        if (err) return console.log(err);
        console.log('New File Created!');
      });
    }
    // console.log(Show[7]);
  })
  .catch(function (error) {
    console.log(error);
  });
}

//use for loop to check everyshow and return ones with high rating
for (let i = 0; i < BingeShows.length; i ++){
  getShow(BingeShows[i]);
}


// console.log(acceptedshows);
// fs.writeFile('helloworld.txt', JSON.stringify(acceptedshows), function (err) {
//   if (err) return console.log(err);
//   console.log('New File Created!');
// });
