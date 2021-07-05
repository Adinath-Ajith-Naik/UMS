const { response } = require("express");
const express = require("express");
const app = express();
const port=3000;


app.get('/',(request, response)=>{
    response.status(200).send("<h1>Hello There</h1>");
})

app.get('/healthCheck',(request, response)=>{
    response.status(200).send("<h2> Server is UP</h2>");
})

app.listen(port,()=>{
    console.log("Server Up! Welcome to  ",port);
})
