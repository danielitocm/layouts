const express = require('express');
const app = express();

const hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

hbs.registerPartials(__dirname + '/views/partials');


app.get('/',(req, res) => {
	res.render('index');
});

app.get('/ironhackers', (req, res) => {
	const state = [
		{'name': 'Francisco', age: 22, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
		{'name': 'perla', age: 15, desc: 'Lorem ipsum dolor sit.'},
		{'name': 'Luther', age: 20, desc:'Lorem ipsum dolor sit amet.'}
	]

	res.render('ironhackers', {state});
})

app.get('/cards', (req, res) => {
	res.render('cards')
})




app.listen(3000, () => console.log('Servidor listo!!!'));