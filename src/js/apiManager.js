let register = require ("register")


const APIManager = Object.create(null, {
    saveUserInfo: {
        value: (usersName,userMail) => {
            return fetch("http://localhost:8088/users ", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"

                },
                body: JSON.stringify(users)
            })
                .then(response => response.json())
        }

    },


    getAllUsers: {
        value: () => {
            return fetch(" http://localhost:8088/users")
            .then(r => r.json())
        }
    },
    deleteEntry: {
        value: (id) => {
            return fetch(` http://localhost:8088/users ${id}`, {
                method: "DELETE"
            })
                .then(r => r.json())
        }
    }
})

module.exports = APIManager