let apiManager = require ("APIManager")


const makeNewChat = (currentUser) => {


 let data = JSON.parse(sessionStorage.getItem("activeUser"))
// let appendMe = document.getElementById("test2").appendChild("Hello")

 let chat = document.getElementById("testMe");
let chatParagraph = document.createElement("p")
let words = ("Welcome to Nutshell"  +" " + data.userName)
chatParagraph.textContent = words
chat.appendChild(chatParagraph)

 function getMe (){
      return fetch(" http://localhost:8088/chat")
      .then(r => r.json())}

$("#chatButton").click(function () {
let userChat={
 userId:data.id,
  message: $("#chatMe").val()


}
setInterval(function(){ location.reload(); }, 1000);
apiManager.saveChatInfo(userChat)
    .then(result => {

    }
        )
      })
getMe()
.then(function (r) {
  r.forEach(chat => {
let ChatDiv = `<div>
<p>${chat.message}</p>
</div>`
console.log(chat.message);

$("#finalChat").append(ChatDiv)

});
})
}
    module.exports = makeNewChat