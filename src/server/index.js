// add Configuration to be able to use env variables
const dotenv = require("dotenv");
dotenv.config();
// Configure the environment variables
let userUrlValue = [];
// Configure fetch
const fetch = require('node-fetch');
var path = require("path");
// Personal API Key for meaningcloud API
let api_key = process.env.API_KEY;
// Spin up the server
const port = 8081;
// Test key
console.log(`Your API key is ${api_key}`);
// Express to run server and routes
const express = require("express");
//  Create an instance for the server & Start up an instance of app
const app = express();
// Configure express static directory.
app.use(express.static("dist"));
// Configure cors to avoid cors-origin issue
var cors = require("cors");
const { Console } = require("console");
app.use(cors());
// Configure express to use body-parser as middle-ware but it is deprecated now in new version use express instead of body-parser.
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// rout Home
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve('src/client/views/index.html'))
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

// a route that handling post request for new URL that coming from the frontend
app.post("/add_url", async (req, res) => {
  try {
    //  GET the url from the request body
    userUrlValue = req.body.url;
    // Set up baseUrl
    const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?'
    console.log(`::: Your URL Is : ${userUrlValue}`);
    // Build the URL
    const fullApiUrl = `${baseUrl}key=${api_key}&url=${userUrlValue}&lang=en`;
    console.log(fullApiUrl);
    // Fetch Data from API
    try {
      const result = await fetch(fullApiUrl);
      const data = await result.json();
      console.log(data);
      res.send(data);
    } catch (error) {
      console.log("Error happen whene fetch api ..", error);
    }
  } catch (error) {
    console.log('error from server :::',error.message);
  }
});

// designates what port the app will listen to for incoming requests
app.listen(port, (error) => {
  if (error) throw new Error(error);
  console.log(`Server listening on port ${port}!`);
});

// export app to use it in the unit testing
module.exports = app;
