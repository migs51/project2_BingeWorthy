$(document).ready(function() {
  //global variables
  var thumbsUp = $("#thumbsUp");
  var thumbsDown = $("#thumbsDown");
  var userName = $("#userEmail");
  var netflix = $("#netflix");
  var showName1 = $("#showName1");
  var poster1 = $("#poster1");
  var showName2 = $("#showName2");
  var poster2 = $("#poster2");
  var showName3 = $("#showName3");
  var poster3 = $("#poster3");
  var showName4 = $("#showName4");
  var poster4 = $("#poster4");
  var showName5 = $("#showName5");
  var poster5 = $("#poster5");
  var showName6 = $("#showName6");
  var poster6 = $("#poster6");
  var showName7 = $("#showName7");
  var poster7 = $("#poster7");
  var showName8 = $("#showName8");
  var poster8 = $("#poster8");
  var showName9 = $("#showName9");
  var poster9 = $("#poster9");

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  console.log(showName1.html());
  $(document).on("click", "button#thumbsUp", thumbsUpFunction)
  //capture email address of user in variable
  function thumbsUpFunction() {
    console.log(showName1.html());
    // $.get("/api/user_data", function(data) {
    //   var userUpVote = {
    //     users: data.email,
    //     shows: showName1.html(),
    //     bingeable: true
    //   };
  //     thumbsUp.on("click", function() {
  //       upVote(userUpVote);
  //       console.log("button clicked");
  //       // thumbsUp.toggle();
  //     });
  //  });
  } 

  // thumbsUpFunction();



  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  var userDownVote = {
    users: "bob",
    shows: "Friends",
    bingeable: false
  };

  function upVote(post) {
    $.post("/api/shows/recommendations", post, function() {
      window.location.href = "/members";
      // thumbsUp.attr("disabled", true);
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


  thumbsDown.click(function(e) {
    e.preventDefault();
    downVote(userDownVote);
    console.log("It worked");
    // thumbsDown.toggle();
  });

  //ajax get request to grab top shows
  function allShows() {
    $.get("api/shows/topshows").then(function(data) {
      showName1.text(data[0].results_title);
      poster1.html(`<img src = ${data[0].results_artwork_208x117}>`);
      showName2.text(data[1].results_title);
      poster2.html(`<img src = ${data[1].results_artwork_208x117}>`);
      showName3.text(data[2].results_title);
      poster3.html(`<img src = ${data[2].results_artwork_208x117}>`);
      showName4.text(data[3].results_title);
      poster4.html(`<img src = ${data[3].results_artwork_208x117}>`);
      showName5.text(data[4].results_title);
      poster5.html(`<img src = ${data[4].results_artwork_208x117}>`);
      showName6.text(data[5].results_title);
      poster6.html(`<img src = ${data[5].results_artwork_208x117}>`);
      showName7.text(data[6].results_title);
      poster7.html(`<img src = ${data[6].results_artwork_208x117}>`);
      showName8.text(data[7].results_title);
      poster8.html(`<img src = ${data[7].results_artwork_208x117}>`);
      showName9.text(data[8].results_title);
      poster9.html(`<img src = ${data[8].results_artwork_208x117}>`);
  
    });
  }

  allShows();
 


  //netflix top shows upon click
  netflix.click(function() {
    $.get("api/shows/netflixes").then(function(data) {
      console.log(data);
      
      showName1.text(data[0].results_title);
      poster1.html(`<img src = ${data[0].results_artwork_208x117}>`);
      showName2.text(data[1].results_title);
      poster2.html(`<img src = ${data[1].results_artwork_208x117}>`);
      showName3.text(data[2].results_title);
      poster3.html(`<img src = ${data[2].results_artwork_208x117}>`);
      showName4.text(data[3].results_title);
      poster4.html(`<img src = ${data[3].results_artwork_208x117}>`);
      showName5.text(data[4].results_title);
      poster5.html(`<img src = ${data[4].results_artwork_208x117}>`);
      showName6.text(data[5].results_title);
      poster6.html(`<img src = ${data[5].results_artwork_208x117}>`);
      showName7.text(data[6].results_title);
      poster7.html(`<img src = ${data[6].results_artwork_208x117}>`);
      showName8.text(data[7].results_title);
      poster8.html(`<img src = ${data[7].results_artwork_208x117}>`);
      showName9.text(data[8].results_title);
      poster9.html(`<img src = ${data[8].results_artwork_208x117}>`);
  
    });
   
  })
  

 


});
