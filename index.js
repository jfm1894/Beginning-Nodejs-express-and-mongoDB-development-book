const express = require('express');
const path = require('path');
const app = new express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
mongoose.connect('mongodb://127.0.0.1:27017/', {useNewUrlParser: true});
app.set('view engine', 'ejs');
app.use(express.static('public'));
const BlogPost = require('./models/BlogPost.js');
app.listen(4000, () => {
  console.log('App listening on port 4000!');
});
app.get('/', async(req, res) => {
  const blogposts = await BlogPost.find({});
  res.render('index',{
    blogposts
  });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/contact', (req, res) => {
  res.render('contact');
});
app.get('/post', (req, res) => {
  res.render('post');
});
app.get('/posts/new', (req, res) => {
  res.render('create');
});
app.get('/posts/new', (req, res) => {
    res.render('create');
});
app.post('/posts/store', async(req,res) => {
   await BlogPost.create(req.body)
    res.redirect('/');
    console.log(req.body)
});
