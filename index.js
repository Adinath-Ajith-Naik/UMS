const { response } = require("express");
const express = require("express");
const app = express();
const port=3000;

var arr=['Books','Pencil','Pen','Reference Guide'];

app.get('/',(request, response)=>{
    response.status(200).send("<h1>Welcome to Java Script</h1>");
})

app.get('/healthCheck',(request, response)=>{
    response.status(200).send("<h2> Server is UP! Welcome to Health Check </h2>");
})

app.get('/array',(request,response)=>{
    response.status(200).send(arr);
})

app.listen(port,()=>{
    console.log("Server Up! Welcome to  ",port);
    console.log(arr);
        
});

/*const arr  = [
    {name: 'Books','Pen','Pencil','Referece Materials'};
]*/
