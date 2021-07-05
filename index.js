const express = require("express");
const app = express();
const port=3000;


app.get('/',(request, response)=>{
    response.status(200).send("<h1>Hello There</h1>")
})

app.listen(port,()=>{
    console.log("Server Up! Welcome to  ",port);
})
