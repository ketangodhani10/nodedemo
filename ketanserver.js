//import express from 'express';
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./api-docs/swagger_output.json');
//import usersRoutes from  './routes/users.js';


const app = express();
const PORT =  process.env.PORT || 5000;

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

//app.use('/users', usersRoutes);

app.get('/',(req,res)=>{
res.send('Hello from Ketan');
});
 
require("./routes/city.js")(app); 
require('./routes/login.js')(app);

app.listen(PORT, () => console.log(`server is running on ${PORT}`));