

console.log("helloasshat");

const loginManager = Object.create({}, {
   loginUser: {



value :(userName , Email)=> {

validate = function(){
    APIManager.getAllUsers("users")
    .then(users =>{
    const user = users.find(user.userName===userName)
    if (!user){
        alert("Please try again! Cannot find user name.")
    } else if (user.userName === userName) {
        userManager.logInUser(user.id)
    } else {
        alert("Incorrect Username, try again, Jackass!.")
    }
    } )
    }
},

logInUser: {
    value: (id) => {
        sessionStorage.setItem("user", id)
    }
},


// currentUser: {
//     value: () => { return JSON.parse(sessionStorage.getItem("user")) }
// },
}
})
validate(newEntry)
module.exports = loginManager