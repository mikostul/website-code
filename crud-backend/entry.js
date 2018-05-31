const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


// create a connection
mongoose.connect('mongodb://jlama:juliolama@ds115360.mlab.com:15360/juliodb');

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to mLab');
});


mongoose.connection.on('error', (error) => {
    console.log(error);
});

// port
const PORT = 3000;





/*
Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers 
to let a user agent gain permission to access selected resources from a server on a different 
origin (domain) than the site currently in use.
Middleware
*/
app.use(cors());



//body-parser for json format, another middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// 'app' will use these routes.
const route = require('./routes/routes');


// when: '/api will use the routes in this folder
app.use('/api', route);



app.get('/', (req, res) => {
    res.send('hi');
    
});


app.listen(PORT, () => {
    console.log('Server started at port:' + PORT);
});

