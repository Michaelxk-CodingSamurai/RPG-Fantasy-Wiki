const express               = require('express')
const elementsRoutes      = require('./routes/elements')
const adventuresRoutes      = require('./routes/adventures')

const app = express();
const port = 5000;

// require('dotenv').load;
require('dotenv').config() 
require('./config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', elementsRoutes), 
app.use('/', adventuresRoutes), 

app.listen(port, () => console.log(`Server is running on port: ${port}`));

module.exports = app;