let apiManager = require("APIManager")
let loginManager = require("login")






let register =()=>
    $("#btn1").click(function () {
        const newEntry = {
            userName: document.querySelector("#username").value,
            Email: document.querySelector("#email").value
        }
        apiManager.saveUserInfo(newEntry)

        $("#myForm")[0].reset();

        console.log(newEntry);
})
register()

console.log("helloa!!SS");

console.log("helllllpoooo");


module.exports = register