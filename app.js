const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => res.render('home'));
app.get('/articles', (req, res) => res.render('articles'));

// Article Pages
app.get('/post', (req, res) => res.render('post'));
app.get('/post1', (req, res) => res.render('post1'));
app.get('/post2', (req, res) => res.render('post2'));
app.get('/post3', (req, res) => res.render('post3'));
app.get('/post4', (req, res) => res.render('post4'));
app.get('/post4', (req, res) => res.render('post5'));
// Other Pages
app.get('/about', (req, res) => res.render('about'));
app.get('/privacy', (req, res) => res.render('privacy'));
app.get('/contact', (req, res) => res.render('contact'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
