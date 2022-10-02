const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users.js'); 

const app = express();

app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.get('/', (req, res)=> res.send('Hello from Home Page!'));

app.listen(5000, ()=> console.log("Server is running..."));