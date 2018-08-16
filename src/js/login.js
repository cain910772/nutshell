let apiManager = require ("APIManager")

console.log("helloasshat");



// const verify = Object.create(null, {
//     verifyUserInfo: {
//         value:
// apiManager.getAllUsers()
// .then(result => {
//     console.log(result);

// }),
// value:
// function loginVerification(users){

//     $("#btn2").click(function () {
//         const newEntry = {
//             userName: document.querySelector("#username").value,
//             Email: document.querySelector("#email").value,
//         }
//     let currentUser = users.find(user => {
//         return user.userName === userName && user.email === email;
//     });

//     if(currentUser){
//         alert("yay you are logged in now!");
//         sessionStorage.setItem("activeUser", JSON.stringify(currentUser));
//         //take them to a new view
//     }else{
//         alert("you are not in our db, please register");
//     }

// })
// }
//     }
// })
// module.exports = verify
// //     }),
// //     value:
// //     function validate(users){

// //     document.querySelector("#username").value,
// //     document.querySelector("#email").value;

// //     let currentUser = users.find(user=>{
// //         return user.username===username&&user.email === email;});

// //     if (currentUser){
// //         alert("Logged in");
// //         sessionStorage.setItem("activeUser",JSON.stringify(currentUser));
// //     } else {
// //         alert("Please Register");
// //  }