//const { response } = require("express");
const {
    response, request
} = require("express");
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
    console.log("request body", request.body);
    var logUser = null;
    users.forEach((user) => {
        if (uname === user.userName && upw === user.password) {
            console.log(true);
            logUser = user;
        }
    });
    console.log(logUser);
    var respo = {
        acknowledgement: {
            status: "",
            message: ""
        },
        data: null
    };

    if (logUser) {
        respo.acknowledgement.status = "Success";
        respo.acknowledgement.message = "Login Successful";
        respo.data = logUser;
        response.status(200).send(respo);
    } else {
        respo.acknowledgement.status = "Fail";
        respo.acknowledgement.message = "Login Fail";
        respo.data = null;
        response.status(200).send(respo);
    }

})

// Creating new User

app.post('/user/create', (request, response) => {
    console.log("Creating a new user")
    var ID = request.body.id;

    var user = {
        userId: request.body.id,
        firstName: request.body.fName,
        middleName: request.body.mName,
        lastName: request.body.lName,
        userName: request.body.uName,
        password: request.body.password,
    }
    users.push(user);
    var news = ID;
    console.log(users);
    // console.log(news);

    var respo = {
        acknowledgement: {
            status: "",
            message: ""
        },
        data: null
    };

    if (news) {
        respo.acknowledgement.status = "Success";
        respo.acknowledgement.message = "User Created Successful";
        respo.data = user;
        response.status(200).send(respo);
    } else {
        respo.acknowledgement.status = "Fail";
        respo.acknowledgement.message = "Creation Failed";
        respo.data = users.user;
        response.status(200).send(respo);
    }
})


//User Display

app.get('/users', (request, response) => {
    var respo = {
        acknowledgement: {
            status: "",
            message: ""
        },
        data: null
    };

    console.log(users);
    //users.foreach(user){
    if (users) {
        response.acknowledgement.status = "Success";
        response.acknowledgement.message = "User details";
        response.data = users;
        response.status(200).send(respo);
    } else {
        response.acknowledgement.status = "Fail";
        response.acknowledgement.message = "No User details";
        response.data = null;
        response.status(200).send(respo);
    }
})

//Updating the details of user

app.post('/user/update/:id', (request, response) => {
    var uID = request.params.id;
    console.log("ID", uID);
    var respo = {
        acknowledgement: {
            status: "",
            message: ""
        },
        data: null
    };
    users.forEach((user, index) => {
        if (uID == user.userId) {
            if (userUpdate(index, request.body)) {
                console.log("first");
                respo.acknowledgement.status = "Success";
                respo.acknowledgement.message = "User Details Updated Succesfully";
                respo.data = user
                response.status(200).send(respo);
            } else {
                respo.acknowledgement.status = "Fail";
                respo.acknowledgement.message = "Enter";
                response.status(400).send(respo);

            }
        } else {
            respo.acknowledgement.status = "Fail";
            respo.acknowledgement.message = "User Details Updation Failed";
            respo.data = null;
        }
    });
    if (respo.data == null) {
        response.status(400).send(respo);
    }
})

function userUpdate(index, data) {
    if (data.fname || data.mname || data.lname || data.un || data.pw) {
        if(data.fname){
            users[index].firstName = data.fname;
        }
        if(data.mname){
            users[index].middleName = data.mname;
        }
        if(data.lname){
            users[index].lastName = data.lname;
        }
        if(data.un){
            users[index].userName = data.un;
        }
        if(data.pw){
            users[index].password = data.pw;
        }
        return true;
    } else {
        return false;
    }
    //console.log("helo");
}

// Viewing User

app.get('/user/:id',(request,response)=>{
    var uID=request.params.id;
    var respo={
        acknowledgement:{
            status:"",
            message:""
        },
        data:null
    };
    var logUser;

    users.forEach((user)=>{
        if(uID==user.userId){
            logUser=user;
        }else{
            logUser=null;
        }
    })

    if(logUser){
        respo.acknowledgement.status="Success";
        respo.acknowledgement.message="User Found";
        respo.data=logUser;
        response.status(200).send(respo);
    }else{
        respo.acknowledgement.status="Fail";
        respo.acknowledgement.message="User not Found";
        respo.data=null;
        response.status(200).send(respo);
    }
})

// Deleting a user

app.post('user/delete/:id',(request,response) =>{
    var uID= request.params.id;

    var respo={
        acknowledgement:{
            status: "",
            message:""
        },
        data:null
    };

    users.forEach((user) =>{
        if(uID == user.userId){
            const index= users.indexOf(uID)

            if(index >-1){
                users.delete(index)
                respo.acknowledgement.status="Success";
                respo.acknowledgement.message="User Successfully Deleted";
                respo.data=user;
                response.status(200).send(respo);
            }else{
                respo.acknowledgement.status="Fail";
                respo.acknowledgement.message="User Not Deleted";
                respo.data=null;
                response.status(200).send(respo);
            }
        }

        console.log(users);
    })

})

//Additon of 2 nos

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