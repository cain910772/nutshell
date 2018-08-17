let apiManager = require("APIManager")





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
            alert("Success!");
            sessionStorage.setItem("activeUser", JSON.stringify(currentUser));
            $("#exampleModal").modal("hide");
            $("#hideMeBeforeLogin").toggle()            //take them to a new view
        } else {
            alert("Please Register");
         {

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

                }

                    .then(allUsers => {
                        //loop over the users in the database and compare values from the form
                        for (let i = 0; i < allUsers.length; i++) {
                            if (allUsers[i].username === registeringUser.username || allUsers[i].email === registeringUser.email) {
                                alert("User Name or Email in Use, Please Try Again.")
                            } else {
                                alert("woooo! you're logged in!")
                                //add them to db! and theeeeeennnn
                                apiManager.addUserToDb(registeringUser)
                                    .then(userThatWasAdded => {
                                        sessionStorage.setItem("activeUser", JSON.stringify(userThatWasAdded));


                                    })


                    }}}))})}}})}


                    $("#logOut").click(function(){
                        sessionStorage.clear()
                        alert("Logout Complete")
            }  //change the view
        )

//get users from the database

console.log("helloooooooooo")
