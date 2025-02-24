

const express = require('express');//This imports express
const routes = express.Router();//This creates an instance of a router


routes.get('/students', (request, response) => {
    response.send({type: 'get Request'});
});//This is a route for the get request to the students endpoint


routes.post('/students', (request, response) => {
    response.send({type: 'Post Request'});
});// This is a route for the post request to the students endpoint


routes.put('/students/id:', (request, response) => {
response.send({type: 'Put Request'});
});// This is a route for the put/update request to the students endpoint

routes.delete('/students/id:', (request, response) => {
    response.send({type: 'Delete Request'});
});// This to help in deleting


module.exports = routes;