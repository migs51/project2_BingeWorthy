$(document).ready(function() {
  //global variables
  const thumbsUp = $("#thumbsUp");
  const thumbsDown = $("#thumbsDown");

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  function upVote() {
    thumbsUp.click(function() {
      

    })
  }

  function downVote() {
    thumbsDown.click(function() {
      console.log("It worked");
    })
  }


  upVote();
  downVote();




});
