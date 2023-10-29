//Required Packages 
const express = require('express');
const htmlRoute = require('./routes/html-route');
const apiRoute = require('./routes/api-route');

//Express PORT 
const PORT = process.env.PORT || 3001;

//Initialize Express 
const app = express();

//Middleware for parsing and urlencoded form data 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(htmlRoute)
app.use(apiRoute)

app.use(express.static('public'));

app.listen(PORT, () =>
    console.log(`App listening at http:localhost:${PORT}`)
);
 