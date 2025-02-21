const express = require('express');//This imports express
require('dotenv').config();
require('./helpers/init_mongodb');
const app = express();//This helps use express
const routes = require('./routes/StudentRoute');
app.use(routes);

app.listen(process.env.port || 4000, () => {
    console.log('Server is running on port 4000')
});//This is to start the server to listen on port 4000

