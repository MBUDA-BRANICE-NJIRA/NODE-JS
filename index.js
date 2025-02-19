const express = require('express');//This imports express
const app = express();//This helps use express
const routes = require('./routes/api');
app.use(routes);

app.listen(process.env.port || 4000, () => {
    console.log('Server is running on port 4000')
});//This is to strtr the server to listen on port 4000

