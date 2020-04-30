//the goal of this file is to take in an existing array of tv shows
//categorized by subscription and filter them by ratings
//to make finalized list
var axios = require("axios");
var fs = require("fs");

//import json lists from guideboxapi folder to use for this thing
var rawdata = fs.readFileSync("../../guideboxAPI/amazon.json");
var showdata = JSON.parse(rawdata);
//save titles from guidebox to get list with more info
var BingeShows = [];
for (var i = 0; showdata.results.length > i; i++) {
  BingeShows.push(showdata.results[i].title);
}
console.log(BingeShows);

//run the code with different subscriptions each time and change the file name
//each time
//OMDB API
//'http://www.omdbapi.com/?apikey=[a0a7442c]'

//import variable from somewhere else, temp below

var acceptedshows = [];
//API camazon here
function getShow(Title) {
  axios
    .get("http://www.omdbapi.com/", {
      params: {
        apikey: "a0a7442c",
        t: Title
      }
    })
    .then(function(response) {
      //media response stats
      // console.log(response.data);

      acceptedshows.push(response.data);
      //make new file with updated info
      fs.writeFile("amazon2.json", JSON.stringify(acceptedshows), function(
        err
      ) {
        if (err) {
          return console.log(err);
        }
        console.log("New File Created!");
      });
      // }
    })
    .catch(function(error) {
      console.log(error);
    });
}

//use for loop to check everyshow and return ones with high rating
for (var i = 0; i < BingeShows.length; i++) {
  getShow(BingeShows[i]);
}
