let apiManager = require("APIManager")
let loginManager2 = require("login")




apiManager.getAllUsers()
    .then(result => {
        console.log(result);
        loginVerification(result);
    });

function loginVerification(users) {

    $("#btn1").click(function () {
        const newEntry = {
            userName: document.querySelector("#username").value,
            Email: document.querySelector("#email").value,
        }
        apiManager.saveUserInfo(newEntry)
        // pushes new user to db

        let currentUser = users.find(user => {
            return user.userName === newEntry.userName && user.email === newEntry.email;
        });

        if (currentUser) {
            alert("yay you are logged in now!");
            sessionStorage.setItem("activeUser", JSON.stringify(currentUser));
            //take them to a new view
        } else {
            alert("you are not in our db, please register");
        }


        apiManager.getAllUsers().then(allUsers => {
            let registeringUser = {
                userName: username,
                email: email
            }
            $("#btn2").click(function () {
                const newEntry2 = {
                    userName: document.querySelector("#username").value,
                    Email: document.querySelector("#email").value,
                }

                    .then(allUsers => {
                        //loop over the users in the database and compare values from the form
                        for (let i = 0; i < allUsers.length; i++) {
                            if (allUsers[i].username === registeringUser.username || allUsers[i].email === registeringUser.email) {
                                alert("your username AND email must be unique. We found a duplicate in your database.")
                            } else {
                                alert("woooo! you're logged in!")
                                //add them to db! and theeeeeennnn
                                apiManager.addUserToDb(registeringUser)
                                    .then(userThatWasAdded => {
                                        sessionStorage.setItem("activeUser", JSON.stringify(userThatWasAdded));
                                    })
                            }  //change the view
                        }
                    }
                    )
            }
            )
        }
        )
    }
    )
}







//get users from the database

console.log("helloooooooooo")
