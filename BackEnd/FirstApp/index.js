const express = require("express");
const app = express();

// app.use((req,res) => {
//     console.log("WE GOT A NEW REQUEST");
//     res.send("HELLO, WE GOT YOUR REQREST! THIS IS THE RESPONSE");
// })

app.get('/', (req, res) => {
    res.send('THIS IS THE HOMEPAGE')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit </h1>`);
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing the Post Id:${postId} on the ${subreddit} subreddit </h1>`);
})
app.get('/cats', (req, res) => {
    // console.log("CAT REQUEST");
    // res.send("HELLO, WE GOT YOUR REQREST! THIS IS THE RESPONSE");
    res.send('MEOW!!!');
})

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!! THIS IS DIFFERENT THEN A GET REQUEST');
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!!!');
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("NOTHING FOUND IF NOTHING SEARCH");
    }
    else {
        res.send(`<h1> Search result for: ${q}</h1>`);
    }
})

app.get('*', (req, res) => {
    res.send('I DONT KNOW ABOUT THAT PATH');
})


// /r/SOMETHINGHERE
// /cats=> 'meow'
// /dogs=> 'woof'
// '/'=> welcome to out homepage

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080!");
})

