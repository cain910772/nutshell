
const newChat = (currentUser) => {
    const putToPage = $("chat")
    console.log(putToPage);
    putToPage.append(

        )
    }
 let data = JSON.parse(sessionStorage.getItem("activeUser"))
// let appendMe = document.getElementById("test2").appendChild("Hello")

 let chat = document.getElementById("testMe");
let chatParagraph = document.createElement("p")
let words = ("Welcome to Nutshell"  +" " + data.userName)
chatParagraph.textContent = words
chat.appendChild(chatParagraph)


    console.log(data.userName);

    module.exports = newChat