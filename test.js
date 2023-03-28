const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost.js');
mongoose.connect('mongodb://127.0.0.1:27017/', {useNewUrlParser: true})
.then(() => {console.log('Connected to MongoDB');})
.catch(error => {console.log(error)});
BlogPost.create({
    title: 'The Mythbuster\'s Guide to Saving Money on Energy Bills',
    body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispel a myth. The myth was that you can save money by regularly turning your heating off and on. You can’t, it turns out. '
})
.then(blogpost =>{
    console.log(blogpost);
})
.catch(error =>{
    console.log(error);
})
