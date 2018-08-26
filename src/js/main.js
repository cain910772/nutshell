let loginManager2 = require ("register")
let apiManager = require ("APIManager")
let makeNewTask = require("taskForm")
let buildLanding = require("landingPage")
let makeNews = require("news")
let makeEvent = require("./events")
let friendsList =require("friends")
let makeNewChat = require("./chat")



$(document).ready(makeNewTask());
$(document).ready(makeNews());
$(document).ready(friendsList())
$(document).ready(makeEvent())
$(document).ready(makeNewChat())

// console.log("hello");
