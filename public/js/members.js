$(document).ready(function() {
  //global variables
  const thumbsUp = $("#thumbsUp");
  const thumbsDown = $("#thumbsDown");
  const showName = $("#showName");
  const userName = $("#userEmail");
  

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  //NEED TO FIGURE OUT WHY THIS IS RETURNING AN EMPTY OBJECT
  let userEmail = $.get("/api/user_data").then(function() {
      return this.email;
  });

  



  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  console.log("username is: " + userEmail);
  console.log(userName.val());

  let userUpVote = {
    users: JSON.stringify(userEmail),
    shows:  "West World",
    bingeable: true
  }

  let userDownVote = {
    users: JSON.stringify(userEmail),
    shows:  "Friends",
    bingeable: false
  }



  function upVote(post) {
    $.post("/api/shows/recommendations", post, function() {
      window.location.href = "/members";
    });
  }

  thumbsUp.click(function() {
    upVote(userUpVote);
    console.log("button clicked");
  });

  function downVote(post) {
    $.post("/api/shows/recommendations", post, function() {
      window.location.href = "/members";
    });
  }

  thumbsDown.click(function() {
    downVote(userDownVote);
    console.log("It worked");


  });
  
 
});
