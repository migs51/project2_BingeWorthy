$(document).ready(function() {
  //global variables
  // var thumbsUp = $("#thumbsUp");
  // var thumbsDown = $("#thumbsDown");
  var userName = $(".member-name");
  var netflix = $("#netflix-btn");
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
  var showName10 = $("#showName10");
  var poster10 = $("#poster10");
  var landingpage = $("#landing-page");
  var netflix = $("#netflixPage");
  var hulu = $("#huluPage");
  var amazon = $("#amazonPage");
  var hbo = $("#hboPage");
  // var showName = $("#showName");

  //click handlers to grab top shows by streaming service
  $(document).on("click", "button#homepage", allShows);
  $(document).on("click", "button#netflix-btn", netflixAll);
  $(document).on("click", "button#hulu-btn", huluAll);
  $(document).on("click", "button#amazon-btn", amazonAll);
  $(document).on("click", "button#hbo-btn", hboAll);

  //click handler showName1
  console.log("here");
  $(document).on("click", "button#thumbsUp", thumbsUpFunction);
  $(document).on("click", "button#thumbsDown", thumbsDownFunction);
  console.log("there");
  //click handler showName2
  $(document).on("click", "button#thumbsUp2", thumbsUpFunction2);
  $(document).on("click", "button#thumbsDown2", thumbsDownFunction2);
  //click handler showName3
  $(document).on("click", "button#thumbsUp3", thumbsUpFunction3);
  $(document).on("click", "button#thumbsDown3", thumbsDownFunction3);
  //click handler showName4
  $(document).on("click", "button#thumbsUp4", thumbsUpFunction4);
  $(document).on("click", "button#thumbsDown4", thumbsDownFunction4);
  //click handler showName5
  $(document).on("click", "button#thumbsUp5", thumbsUpFunction5);
  $(document).on("click", "button#thumbsDown5", thumbsDownFunction5);
  //click handler showName6
  $(document).on("click", "button#thumbsUp6", thumbsUpFunction6);
  $(document).on("click", "button#thumbsDown6", thumbsDownFunction6);
  //click handler showName7
  $(document).on("click", "button#thumbsUp7", thumbsUpFunction7);
  $(document).on("click", "button#thumbsDown7", thumbsDownFunction7);
  //click handler showName8
  $(document).on("click", "button#thumbsUp8", thumbsUpFunction8);
  $(document).on("click", "button#thumbsDown8", thumbsDownFunction8);
  //click handler showName9
  $(document).on("click", "button#thumbsUp9", thumbsUpFunction9);
  $(document).on("click", "button#thumbsDown9", thumbsDownFunction9);
  //click handler showName10
  $(document).on("click", "button#thumbsUp10", thumbsUpFunction10);
  $(document).on("click", "button#thumbsDown10", thumbsDownFunction10);

  console.log(showName1.html());
  console.log(showName10.html());

  //ShowName 1 Like and Dislike Button functions
  function thumbsUpFunction(event) {
    console.log("function here");
    event.preventDefault();
    var userUpVote = {
      users: userName.html(),
      shows: showName1.html(),
      bingeable: true
    };
    console.log(showName1.html());
    console.log(userName.html());
    console.log(userUpVote);
    upVote(userUpVote);
  }

  function thumbsDownFunction(event) {
    event.preventDefault();
    var userDownVote = {
      users: userName.html(),
      shows: showName1.html(),
      bingeable: false
    };

    downVote(userDownVote);
  }
  //ShowName 2 Like and Dislike Button functions
  function thumbsUpFunction2(event) {
    event.preventDefault();
    var userUpVote = {
      users: userName.html(),
      shows: showName2.html(),
      bingeable: true
    };
    console.log(showName2.html());
    console.log(userName.html());
    console.log(userUpVote);
    upVote(userUpVote);
  }

  function thumbsDownFunction2(event) {
    event.preventDefault();
    var userDownVote = {
      users: userName.html(),
      shows: showName2.html(),
      bingeable: false
    };

    downVote(userDownVote);
  }
  //ShowName 3 Like and Dislike Button functions
  function thumbsUpFunction3(event) {
    event.preventDefault();
    var userUpVote = {
      users: userName.html(),
      shows: showName3.html(),
      bingeable: true
    };
    console.log(showName3.html());
    console.log(userName.html());
    console.log(userUpVote);
    upVote(userUpVote);
  }

  function thumbsDownFunction3(event) {
    event.preventDefault();
    var userDownVote = {
      users: userName.html(),
      shows: showName3.html(),
      bingeable: false
    };
    downVote(userDownVote);
  }
  //ShowName 4 Like and Dislike Button functions
  function thumbsUpFunction4(event) {
    event.preventDefault();
    var userUpVote = {
      users: userName.html(),
      shows: showName4.html(),
      bingeable: true
    };
    upVote(userUpVote);
  }

  function thumbsDownFunction4(event) {
    event.preventDefault();
    var userDownVote = {
      users: userName.html(),
      shows: showName4.html(),
      bingeable: false
    };
    downVote(userDownVote);
  }
  //ShowName 5 Like and Dislike Button functions
  function thumbsUpFunction5(event) {
    event.preventDefault();
    var userUpVote = {
      users: userName.html(),
      shows: showName5.html(),
      bingeable: true
    };
    upVote(userUpVote);
  }

  function thumbsDownFunction5(event) {
    event.preventDefault();
    var userDownVote = {
      users: userName.html(),
      shows: showName5.html(),
      bingeable: false
    };
    downVote(userDownVote);
  }
  //ShowName 6 Like and Dislike Button functions
  function thumbsUpFunction6(event) {
    event.preventDefault();
    var userUpVote = {
      users: userName.html(),
      shows: showName6.html(),
      bingeable: true
    };
    upVote(userUpVote);
  }

  function thumbsDownFunction6(event) {
    event.preventDefault();
    var userDownVote = {
      users: userName.html(),
      shows: showName6.html(),
      bingeable: false
    };
    downVote(userDownVote);
  }
  //ShowName 7 Like and Dislike Button functions
  function thumbsUpFunction7(event) {
    event.preventDefault();
    var userUpVote = {
      users: userName.html(),
      shows: showName7.html(),
      bingeable: true
    };
    upVote(userUpVote);
  }

  function thumbsDownFunction7(event) {
    event.preventDefault();
    var userDownVote = {
      users: userName.html(),
      shows: showName7.html(),
      bingeable: false
    };
    downVote(userDownVote);
  }
  //ShowName 8 Like and Dislike Button functions
  function thumbsUpFunction8(event) {
    event.preventDefault();
    var userUpVote = {
      users: userName.html(),
      shows: showName8.html(),
      bingeable: true
    };
    upVote(userUpVote);
  }

  function thumbsDownFunction8(event) {
    event.preventDefault();
    var userDownVote = {
      users: userName.html(),
      shows: showName8.html(),
      bingeable: false
    };
    downVote(userDownVote);
  }
  //ShowName 9 Like and Dislike Button functions
  function thumbsUpFunction9(event) {
    event.preventDefault();
    var userUpVote = {
      users: userName.html(),
      shows: showName9.html(),
      bingeable: true
    };
    upVote(userUpVote);
  }

  function thumbsDownFunction9(event) {
    event.preventDefault();
    var userDownVote = {
      users: userName.html(),
      shows: showName9.html(),
      bingeable: false
    };
    downVote(userDownVote);
  }
  //ShowName 10 Like and Dislike Button functions
  function thumbsUpFunction10(event) {
    event.preventDefault();
    var userUpVote = {
      users: userName.html(),
      shows: showName10.html(),
      bingeable: true
    };
    console.log(showName10.html());
    console.log(userName.html());
    console.log(userUpVote);
    upVote(userUpVote);
  }

  function thumbsDownFunction10(event) {
    event.preventDefault();
    var userDownVote = {
      users: userName.html(),
      shows: showName10.html(),
      bingeable: false
    };
    downVote(userDownVote);
  }

  //ajax request to display user Email on DOM
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  //upVote and downVote POST requests to express and our DB
  function upVote(post) {
    $.post("/api/shows/recommendations", post, function() {
      console.log("it works");
    });
  }

  function downVote(post) {
    $.post("/api/shows/recommendations", post, function() {
      console.log("it works");
    });
  }

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
      showName10.text(data[9].results_title);
      poster10.html(`<img src = ${data[9].results_artwork_208x117}>`);
    });
  }

  allShows();

  //netflix top shows upon click
  function netflixAll() {
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
      showName10.text(data[9].results_title);
      poster10.html(`<img src = ${data[9].results_artwork_208x117}>`);
    });
  }

  //ajax request to get all hulu shows
  function huluAll() {
    $.get("api/shows/hulus").then(function(data) {
      console.log(data);
      // hululogo.html(`<img src ='public\images\hulu.png' alt= 'hulu logo'`)
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
      showName10.text(data[9].results_title);
      poster10.html(`<img src = ${data[9].results_artwork_208x117}>`);
    });
  }

  //ajax request to get all amazon prime shows
  function amazonAll() {
    $.get("api/shows/amazons").then(function(data) {
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
      showName10.text(data[9].results_title);
      poster10.html(`<img src = ${data[9].results_artwork_208x117}>`);
    });
  }

  //ajax request to get all hbo shows
  function hboAll() {
    $.get("api/shows/hbos").then(function(data) {
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
      showName10.text(data[9].results_title);
      poster10.html(`<img src = ${data[9].results_artwork_208x117}>`);
    });
  }

  //For switching pages.

  $("#homepage").on("click", function() {
    console.log("ive been clicked");
    netflix.addClass("hidden");
    hulu.addClass("hidden");
    amazon.addClass("hidden");
    hbo.addClass("hidden");
    landingpage.removeClass("hidden");
  });
  // $("#netflix-btn").on("click", function() {
  //   console.log("ive been clicked");
  //   landingpage.addClass("hidden");
  //   hulu.addClass("hidden");
  //   amazon.addClass("hidden");
  //   hbo.addClass("hidden");
  //   netflix.removeClass("hidden");
  // });

  // $("#hulu-btn").on("click", function() {
  //   console.log("ive been clicked");
  //   netflix.addClass("hidden");
  //   landingpage.addClass("hidden");
  //   amazon.addClass("hidden");
  //   hbo.addClass("hidden");
  //   hulu.removeClass("hidden");
  // });

  // $("#amazon-btn").on("click", function() {
  //   console.log("ive been clicked");
  //   netflix.addClass("hidden");
  //   hulu.addClass("hidden");
  //   landingpage.addClass("hidden");
  //   hbo.addClass("hidden");
  //   amazon.removeClass("hidden");
  // });

  // $("#hbo-btn").on("click", function() {
  //   console.log("ive been clicked");
  //   netflix.addClass("hidden");
  //   hulu.addClass("hidden");
  //   amazon.addClass("hidden");
  //   landingpage.addClass("hidden");
  //   hbo.removeClass("hidden");
  // });

  // For toggle the menu button
  document.getElementById("nav-toggle").onclick = function() {
    document.getElementById("nav-content").classList.toggle("hidden");
  };
});
