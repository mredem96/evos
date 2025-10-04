const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const helmet = require('helmet');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

// Security middleware
app.use(helmet());




app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'EVOs Enjoy Fast Food in any time',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/menu', (req, res) => {
    res.render('menu.hbs', {
      pageTitle: 'EVOs Menu'
    });
  });
app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.get('/contact', (req, res) => {
  res.render('contact.hbs', {
    pageTitle: 'Contact Us'
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});