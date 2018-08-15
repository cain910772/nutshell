let apiManager = require("APIManager")






let register=()=>{
$("#btn1").click(function(){
let usersName=$( "#username" ).val()
let userMail=$( "#email" ).val()
apiManager.saveUserInfo()

})
}
register();
console.log("helloa!!SS");

module.exports = register