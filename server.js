const express = require('express')
const app = express()
const port = 3000


// Formulier oefening
const users = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/form', (req, res) => {
  res.render('form.ejs');
})

app.post('/form', (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.send('Formulier ontvangen');
})



// opdrachten
app.get('/sarah', (req, res) => {
  res.send('Hoiiii!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.set('view engine', 'ejs');

app.use(express.static('static'));



app.get('/hoi', toonFilms)

function toonFilms(req, res) {
  const movie = {
    title: 'Shawshank!',
    description: 'Movie about..',
  };
  res.render('template.ejs', {data: movie})
}

