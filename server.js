const express = require('express');
const app = express();

const mongoose = require('mongoose'); // Mongoose.
const CORS = require('cors');
const bodyParser = require('body-parser');





// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);


// create connection
mongoose.connect('mongodb://heroku_tklrfnpw:rvlhkomef1um9t2550sen49ahh@ds235850.mlab.com:35850/heroku_tklrfnpw');
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to mLab');
});
mongoose.connection.on('error', (error) => {
  console.log(error);
});



app.use(CORS());
//body-parser for json format, another middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const routes = require('./routes/routes');
app.use('/api', routes);
