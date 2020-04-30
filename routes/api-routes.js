// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  //Route for displaying top 10 shows in our database -JS
  app.get("/api/shows/topshows", function(req, res) {
    db.allShows.findAll({
      limit: 10,
      // order: ["bingeRank", "DESC"]
    }).then(function(results) {
      res.json(results);
    });
  });

    //Route for displaying top 10 NETFLIX shows in our database -MM
    app.get("/api/shows/netflixes", function(req, res) {
      db.netflixes.findAll({
        limit: 10,
        // order: ["bingeRank", "DESC"]
      }).then(function(results) {
        res.json(results);
      });
    });

  //Route for displaying shows by streaming platform -JS
  app.get("/api/shows/streamingService/:streamingService", function(req, res) {
    db.Show.findAll({
      where: {
        streamingService: req.params.streamingService
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  //Route for displaying shows by rating -JS
  app.get("/api/shows/bingeRank", function(req, res) {
    db.Show.findAll({
      order: ["bingeRank", "DESC"]
    }).then(function(results) {
      res.json(results);
    });
  });

  //Route for displaying shows by title -JS
  app.get("/api/shows/title/:title", function(req, res) {
    db.Show.findAll({
      where: {
        title: req.params.title
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  //Route for displaying shows by genre -JS
  app.get("/api/shows/genre/:genre", function(req, res) {
    db.Show.findAll({
      where: {
        genre: req.params.genre
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  //Route for displaying ALL shows in our database -JS
  //Note - Don't use this one, use ALLSHOWS ordered by rating -JS
  app.get("/api/shows", function(req, res) {
    db.Show.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  //Post route to record user boolean rating -JS
  //How to validate user and limit them to 1 rating? Does this post code even work? What is req.body? -JS
  app.post("/api/shows/recommendations", function(req, res) {
    //console.log(req.body);
    db.Recommendation.create({
      users: req.body.users,
      shows: req.body.shows,
      bingeable: req.body.bingeable
    }).then(function(results) {
      res.json(results);
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
