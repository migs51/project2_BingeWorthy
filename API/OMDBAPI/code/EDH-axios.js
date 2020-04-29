
//the goal of this file is to take in an existing array of tv shows
//categorized by subscription and filter them by ratings
//to make finalized list
 const axios = require('axios');
const fs = require("fs");

//import json lists from guideboxapi folder to use for this thing
let rawdata = fs.readFileSync('../guideboxAPI/starz.json');
let showdata = JSON.parse(rawdata);
//save titles from guidebox to get list with more info
const BingeShows = [];
for (let i=0; showdata.results.length > i; i++) {
  BingeShows.push(showdata.results[i].title);
}
console.log(BingeShows);

//run the code with different subscriptions each time and change the file name
//each time
//OMDB API
//'http://www.omdbapi.com/?apikey=[a0a7442c]'

//import variable from somewhere else, temp below


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
    
      // if (parseInt(Show[5]) > 80 || parseFloat(Show[6]) > 8) {
      //add imported show to
      acceptedshows.push(Show);
      //make new file with updated info
      fs.writeFile('starz2.json', JSON.stringify(acceptedshows), function (err) {
        if (err) return console.log(err);
        console.log('New File Created!');
      });
      // }
  })
  .catch(function (error) {
    console.log(error);
  });
}

//use for loop to check everyshow and return ones with high rating
for (let i = 0; i < BingeShows.length; i ++){
  getShow(BingeShows[i]);
}


