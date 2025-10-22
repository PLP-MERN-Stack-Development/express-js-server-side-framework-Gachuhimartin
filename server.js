const express = require('express');
const dotenv = require('dotenv');
const ConnectDB = require('./config/db');

dotenv.config();

const app = express();

app.use(express.json());

ConnectDB();

const ProductRoutes = require('./routes/product.route');

app.use('/api/product',ProductRoutes);

app.get('/',(req,res)=>{
  res.send("Hello form node api");
})

const PORT = process.env.PORT;
app.listen(PORT,()=>console.log(`Server is up and running on port ${PORT}........`))
