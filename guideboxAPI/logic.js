var axios = require("axios");
var fs = require("fs");

console.log("logic running");

var apikey = "1b7fe0e383cf3b6ac284e087a1307145868670c9";
var limit = "100";
var showLimit = "&limit=" + limit;
var hboSelect = "&channel=hbo";
var netflixSelect = "&channel=netflix";
var amazonSelect = "&channel=amazon";
var huluSelect = "&channel=hulu";
var showtimeSelect = "&channel=showtime";
var disneySelect = "&channel=disney+";
var starzSelect = "&channel=starz";
var baseurl =
  "http://api-public.guidebox.com/v2/shows/?api_key=" + apikey + showLimit;
var hboURL =
  "http://api-public.guidebox.com/v2/shows/?api_key=" +
  apikey +
  showLimit +
  hboSelect;
var netflixURL =
  "http://api-public.guidebox.com/v2/shows/?api_key=" +
  apikey +
  showLimit +
  netflixSelect;
var amazonURL =
  "http://api-public.guidebox.com/v2/shows/?api_key=" +
  apikey +
  showLimit +
  amazonSelect;
var huluURL =
  "http://api-public.guidebox.com/v2/shows/?api_key=" +
  apikey +
  showLimit +
  huluSelect;
var showtimeURL =
  "http://api-public.guidebox.com/v2/shows/?api_key=" +
  apikey +
  showLimit +
  showtimeSelect;
var disneyURL =
  "http://api-public.guidebox.com/v2/shows/?api_key=" +
  apikey +
  showLimit +
  disneySelect;
var starzURL =
  "http://api-public.guidebox.com/v2/shows/?api_key=" +
  apikey +
  showLimit +
  starzSelect;

axios
  .get(baseurl)
  .then(function(results) {
    console.log(results.data);
    console.log(results.data.length);
    fs.writeFile("all.json", JSON.stringify(results.data), function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("New File Created!");
    });
  })
  .catch(function(err) {
    console.log(err);
  });

axios
  .get(netflixURL)
  .then(function(results) {
    console.log(results.data);
    console.log(results.data.length);
    fs.writeFile("netflix.json", JSON.stringify(results.data), function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("New File Created!");
    });
  })
  .catch(function(err) {
    console.log(err);
  });

axios
  .get(hboURL)
  .then(function(results) {
    console.log(results.data);
    console.log(results.data.length);
    fs.writeFile("hbo.json", JSON.stringify(results.data), function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("New File Created!");
    });
  })
  .catch(function(err) {
    console.log(err);
  });

axios
  .get(amazonURL)
  .then(function(results) {
    console.log(results.data);
    console.log(results.data.length);
    fs.writeFile("amazon.json", JSON.stringify(results.data), function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("New File Created!");
    });
  })
  .catch(function(err) {
    console.log(err);
  });

axios
  .get(huluURL)
  .then(function(results) {
    console.log(results.data);
    console.log(results.data.length);
    fs.writeFile("hulu.json", JSON.stringify(results.data), function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("New File Created!");
    });
  })
  .catch(function(err) {
    console.log(err);
  });

axios
  .get(showtimeURL)
  .then(function(results) {
    console.log(results.data);
    console.log(results.data.length);
    fs.writeFile("showtime.json", JSON.stringify(results.data), function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("New File Created!");
    });
  })
  .catch(function(err) {
    console.log(err);
  });
axios
  .get(disneyURL)
  .then(function(results) {
    console.log(results.data);
    console.log(results.data.length);
    fs.writeFile("disney.json", JSON.stringify(results.data), function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("New File Created!");
    });
  })
  .catch(function(err) {
    console.log(err);
  });

axios
  .get(starzURL)
  .then(function(results) {
    console.log(results.data);
    console.log(results.data.length);
    fs.writeFile("starz.json", JSON.stringify(results.data), function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("New File Created!");
    });
  })
  .catch(function(err) {
    console.log(err);
  });
