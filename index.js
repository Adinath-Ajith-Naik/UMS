//const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());


var arr = ['Books', 'Pencil', 'Pen', 'Reference Guide'];

//Object Creation
let users = [{
        userId: "001",
        firstName: "Adinath",
        middleName: "Ajith",
        lastName: "Naik",
        userName: "adinath_naik",
        password: "Hello",
    },

    {
        userId: "002",
        firstName: "Amal",
        middleName: "Mohan",
        lastName: "N",
        userName: "amal_mohan_n",
        password: "World",
    }
]

app.get('/', (request, response) => {
    response.status(200).send("<h1>Welcome to Java Script</h1>");
})

app.get('/healthCheck', (request, response) => {
    response.status(200).send("<h2> Server is UP! Welcome to Health Check </h2>");
})

app.get('/array', (request, response) => {
    response.status(200).send(arr);
})

app.get('/users', (request, response) => {
    response.status(200).send(users);
})

app.post('/login', (request, response) => {
    console.log("hello login");
    console.log(request.body.Username);
    var uname=request.body.Username;
    users.forEach((user) => {
        console.log(user.userName)
    });
    response.send("OK");
    
})

app.listen(port, () => {
    console.log("Server Up! Welcome to  ", port);
    

});


/*const arr  = [
    {name: 'Books','Pen','Pencil','Referece Materials'};
]*/