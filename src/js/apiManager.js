let register = require ("register")


const APIManager = Object.create(null, {
    saveUserInfo: {
        value: (userInfo) => {
            return fetch("http://localhost:8088/users ", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
},
                body: JSON.stringify(userInfo)
            })

                .then(response => response.json())
        }

    },
    saveChatInfo: {
        value: (chatInfo) => {
            return fetch("http://localhost:8088/chat ", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
},
                body: JSON.stringify(chatInfo)
            })

                .then(response => response.json())
        }
    },



    getAllUsers: {
        value: () => {
            return fetch(" http://localhost:8088/users")
            .then(r => r.json())
        },



    deleteEntry: {
        value: (id) => {
            return fetch(` http://localhost:8088/users ${id}`, {
                method: "DELETE"
            })
                .then(r => r.json())
        }
    }
}
})
module.exports = APIManager