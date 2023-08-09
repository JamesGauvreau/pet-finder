const express = require('express'); //  This sets up the server with Express.js, a
                                    //  web app framework for Node.js.
const app = express();  //  This initializes an app (itself named "app") inside
                        //  the Express file. 
const path = require('path');
const dogs = require('./pets.js');

const PORT = 8080;  //  This declares the number of the port we'll be using. Ports
                    //  connect web servers and web clients.

// This will let you launch the server after you type 'node [name].js' in the
// terminal. The server can be reset by using Ctrl+C, then entering 'node
// [name].js' as if you were starting it for the first time. The server will
// need to be reset in order to accept new changes. 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);   //  This logs a success
                                                        //  message so you know
                                                        //  the server launched
                                                        //  without any trouble. 
});

//  ::  OBJECTIVES
//      ☆  Connect array in pets.js to server. 
//  1.  Get all pets at once. 
//      ☆  Map all dogs into array. 
//  2.  Get  individual pets by their names. 
//      ☆  Pull individual dogs. 
//  3.  Get individual pets by the names of their owners.

// Pseudocode incomplete. 

app.get('/pets', (req, res) => {
    console.log(`test pets`);
    console.log(dogs.name);
    res.send(dogs);
});

app.get('/all-pets', (req, res) => {
    res.send(`There are some good boys and girls on this website. Their names are 
    ${dogs.map((dogs) => {
            return (
                dogs.name
            )
        })}
        and their owners are ${dogs.map((dogs) => {
            return (
                dogs.owner)})}
        `);
})


// This will produce a route leading to a page with text info, like the pages
// seen in Puppy Bowl and elsewhat. 
app.get('/hello', (req, res) => {
    res.send('Hello Pup!');
});

app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});

// All three actons are GET methods, intended to retrieve data from a server. 

