$(document).ready(function() {
  //global variables
  var thumbsUp = $("#thumbsUp");
  var thumbsDown = $("#thumbsDown");
  var landingpage = $("#landing-page");
  var netflix = $("#netflixPage");
  // var showName = $("#showName");
  var userName = $("#userEmail");

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  //NEED TO FIGURE OUT WHY THIS IS RETURNING AN EMPTY OBJECT
  var userEmail = $.get("/api/user_data").then(function() {
    return this.email;
  });

  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  console.log("username is: " + userEmail);
  console.log(userName.val());

  var userUpVote = {
    users: JSON.stringify(userEmail),
    shows: "West World",
    bingeable: true
  };

  var userDownVote = {
    users: JSON.stringify(userEmail),
    shows: "Friends",
    bingeable: false
  };

  function upVote(post) {
    $.post("/api/shows/recommendations", post, function() {
      window.location.href = "/members";
      thumbsUp.attr("disabled", true);
    });
  }

  function downVote(post) {
    $.post("/api/shows/recommendations", post, function() {
      window.location.href = "/members";
    });
  }

  //click handlers for upVotes and downVotes
  //need to Put request on the condition that the user has already clicked the button
  //potentially get rid of the thumbsDown for MVP
  thumbsUp.on("click", function(e) {
    e.preventDefault();
    upVote(userUpVote);
    console.log("button clicked");
    thumbsUp.toggle();
  });

  thumbsDown.click(function(e) {
    e.preventDefault();
    downVote(userDownVote);
    console.log("It worked");
    thumbsUp.toggle();
  });

  //For switching pages.
  $("#homepage").on("click", function() {
    netflix.addClass("collapsed", 300, function() {
      landingpage.removeClass("collapsed", 300);
    });
  });

  $("#netflix-btn").on("click", function() {
    landingpage.addClass("collapsed", 300, function() {
      netflix.removeClass("collapsed", 300);
    });
  });



});
