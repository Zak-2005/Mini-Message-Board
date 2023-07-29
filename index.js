const express = require('express');
const exphbs = require('express-handlebars')
const path = require('path')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

app.use('/', require('./routes/messages'))
app.use('/new', require('./routes/messages'))
const PORT = process.env.PORT || 3500;
app.listen(PORT, ()=>console.log("Server running on port", PORT))