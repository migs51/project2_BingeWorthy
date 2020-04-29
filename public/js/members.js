$(document).ready(function() {
  //global variables
  const thumbsUp = $("#thumbsUp");
  const thumbsDown = $("#thumbsDown");
  const showName = $("#showName");
  const userName = $("#userEmail");
  

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  var userEmail = $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  console.log(userEmail);
  console.log(userName.val());

  let userRecco = {
    users: "Joe",
    shows:  "West World",
    bingeable: true
  }

  console.log(userRecco);



  function upVote(post) {
    $.post("/api/shows/recommendations", post, function() {
      window.location.href = "/members";
    });
  }

  thumbsUp.click(function() {
    upVote(userRecco);
    console.log("button clicked");
  });

  function downVote() {
    thumbsDown.click(function() {
      console.log("It worked");


    });
  }
  
  downVote();
});
