const axios = require("axios")
const fs = require("fs");



console.log("logic running")

const apikey = "1b7fe0e383cf3b6ac284e087a1307145868670c9"
const limit = "100"
const showLimit = "&limit=" + limit
const hboSelect = "&channel=hbo"
const netflixSelect = "&channel=netflix"
const amazonSelect = "&channel=amazon"
const huluSelect = "&channel=hulu"
const showtimeSelect = "&channel=showtime"
const disneySelect = "&channel=disney+"
const starzSelect = "&channel=starz"
const baseurl = "http://api-public.guidebox.com/v2/shows/?api_key=" + apikey + showLimit
const hboURL = "http://api-public.guidebox.com/v2/shows/?api_key=" + apikey + showLimit + hboSelect
const netflixURL = "http://api-public.guidebox.com/v2/shows/?api_key=" + apikey + showLimit + netflixSelect
const amazonURL = "http://api-public.guidebox.com/v2/shows/?api_key=" + apikey + showLimit + amazonSelect
const huluURL = "http://api-public.guidebox.com/v2/shows/?api_key=" + apikey + showLimit + huluSelect
const showtimeURL = "http://api-public.guidebox.com/v2/shows/?api_key=" + apikey + showLimit + showtimeSelect
const disneyURL = "http://api-public.guidebox.com/v2/shows/?api_key=" + apikey + showLimit + disneySelect
const starzURL = "http://api-public.guidebox.com/v2/shows/?api_key=" + apikey + showLimit + starzSelect


axios.get(baseurl)
    .then(function (results) {

        console.log(results.data)
        console.log(results.data.length)
        fs.writeFile('all.json', JSON.stringify(results.data), function (err) {
            if (err) return console.log(err);
            console.log('New File Created!');
        });


    }).catch(function (err) {

        console.log(err)

    })

    axios.get(netflixURL)
    .then(function (results) {

        console.log(results.data)
        console.log(results.data.length)
        fs.writeFile('netflix.json', JSON.stringify(results.data), function (err) {
            if (err) return console.log(err);
            console.log('New File Created!');
        });


    }).catch(function (err) {

        console.log(err)

    })

    axios.get(hboURL)
    .then(function (results) {

        console.log(results.data)
        console.log(results.data.length)
        fs.writeFile('hbo.json', JSON.stringify(results.data), function (err) {
            if (err) return console.log(err);
            console.log('New File Created!');
        });


    }).catch(function (err) {

        console.log(err)

    })

    axios.get(amazonURL)
    .then(function (results) {

        console.log(results.data)
        console.log(results.data.length)
        fs.writeFile('amazon.json', JSON.stringify(results.data), function (err) {
            if (err) return console.log(err);
            console.log('New File Created!');
        });


    }).catch(function (err) {

        console.log(err)

    })

    axios.get(huluURL)
    .then(function (results) {

        console.log(results.data)
        console.log(results.data.length)
        fs.writeFile('hulu.json', JSON.stringify(results.data), function (err) {
            if (err) return console.log(err);
            console.log('New File Created!');
        });


    }).catch(function (err) {

        console.log(err)

    })

    axios.get(showtimeURL)
    .then(function (results) {

        console.log(results.data)
        console.log(results.data.length)
        fs.writeFile('showtime.json', JSON.stringify(results.data), function (err) {
            if (err) return console.log(err);
            console.log('New File Created!');
        });


    }).catch(function (err) {

        console.log(err)

    })
    axios.get(disneyURL)
    .then(function (results) {

        console.log(results.data)
        console.log(results.data.length)
        fs.writeFile('disney.json', JSON.stringify(results.data), function (err) {
            if (err) return console.log(err);
            console.log('New File Created!');
        });


    }).catch(function (err) {

        console.log(err)

    })

    axios.get(starzURL)
    .then(function (results) {

        console.log(results.data)
        console.log(results.data.length)
        fs.writeFile('starz.json', JSON.stringify(results.data), function (err) {
            if (err) return console.log(err);
            console.log('New File Created!');
        });


    }).catch(function (err) {

        console.log(err)

    })
