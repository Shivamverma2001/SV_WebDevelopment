const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('home.ejs');
})
app.get('/cats', (req, res) => {
    const cats = ['Blue', 'Rocket', 'Montey', 'Stephanie', 'Winston']
    res.render('cats',{cats})
})
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit })
})
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { rand: num })
})
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})