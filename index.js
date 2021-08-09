//const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());


//var arr = ['Books', 'Pencil', 'Pen', 'Reference Guide'];

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

// Login Check

app.post('/login', (request, response) => {
   // console.log("Hello login");
    //console.log(request.body.Username);
    var uname = request.body.Username;
    var upw = request.body.Password;
    console.log("request body",request.body);
    var logUser = null;
    users.forEach((user) => {
        if (uname === user.userName && upw === user.password) {
            console.log(true);
            logUser = user;
        }
    });
    console.log(logUser);
    var respo={
        acknowledgement:{
            status:"",
            message:""
        },
        data:null
    };

    if (logUser) {
        respo.acknowledgement.status="Success";
        respo.acknowledgement.message="Login Successful";
        respo.data=logUser;
        response.status(200).send(respo);
    } else {
        respo.acknowledgement.status="Fail";
        respo.acknowledgement.message="Login Fail";
        respo.data=null;
        response.status(200).send(respo);
    }

})

// Creating new User

app.post('/user/create',(request,response)=>{
    console.log("Creating a new user")
    var ID=request.body.id;

    var user={
        userId: request.body.id ,
        firstName:request.body.fName ,
        middleName:request.body.mName ,
        lastName: request.body.lName,
        userName: request.body.uName,
        password: request.body.password,
    }
    users.push(user);
    var news=ID;
    console.log(users);
   // console.log(news);

    var respo={
        acknowledgement:{
            status:"",
            message:""
        },
        data:null
    };

    if(news){
        respo.acknowledgement.status="Success";
        respo.acknowledgement.message="User Created Successful";
        respo.data=user;
        response.status(200).send(respo); 
    }  else{
        respo.acknowledgement.status="Fail";
        respo.acknowledgement.message="Creation Failed";
        respo.data=users.user;
        response.status(200).send(respo); 
    }
})

//

app.post('/addition', (request, response) => {
    console.log("Addition taking place.")

    var v1 = request.body.a;
    var v2 = request.body.b;

    var sum = Number(request.body.a) + Number(request.body.b);

    repsond.send(sum);

})

app.listen(port, () => {
    console.log("Server Up! Welcome to  ", port);


});


/*const arr  = [
    {name: 'Books','Pen','Pencil','Referece Materials'};
]*/