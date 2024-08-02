const express = require('express'); 
const connectDB = require('./src/config/db');
const app = express();
const port = 8000;
const userRoutes = require('./src/routes/userRoutes')
const productRoutes = require('./src/routes/productRoutes')
require("dotenv").config();

connectDB()


  app.use(express.json());

  app.use('/api/auth', userRoutes)

  app.use('/api/product', productRoutes)


  app.listen(port, () =>{
    console.log("server is running : ", {port});
})