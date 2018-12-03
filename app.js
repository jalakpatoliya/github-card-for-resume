const express = require('express');

const app = express();
const githubScraper = require('github-scraper');

const url = 'jalakpatoliya'; // a random username

let port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public`));


app.get('/', (req,res) => {
  githubScraper(url, (err, data) => {
    console.log(data);
    res.render("index",{data:data});
  });
});

app.listen(port, () => {
  console.log('Our app is running on http://localhost:' + port);
});
