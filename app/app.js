var express = require('express');
var app = express();
var expressHbs = require('express3-handlebars');
var hbs = require('hbs');
var path = require('path');

hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.engine('hbs', expressHbs({extname:'hbs', defaultLayout:'main.hbs', layoutsDir: path.join(__dirname, '/views/layouts')}));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/public')));
app.use('/', require('./routes/index'));

app.listen(3000);
console.log('Listen Port 3000')