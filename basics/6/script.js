var database = [
    {
        username: "admin",
        password: "password123"
    }
];

var username = prompt("enter user name:");
var password = prompt("enter password:");

function signIn(user, pass) {
    if (user === database[0].username &&
        pass === database[0].password) {
        alert("Welcome back!!admin")
    } else {
        alert("incorrect usrname or password!! please try again");
    }
}

signIn(username, password);


