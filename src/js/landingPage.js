









const buildLanding= () => {
    const putOnPage = $("#landing")
    putOnPage.append(
        `
        <div id = "landing"class="row">
        <div id="friends" class="col-5">Friends</div>
        <div id="news"class="col-7">News</div>
      </div>
      <div class="row">
        <div id="tasks"class="col">New Task</button></div>
        <div id="chat"class="col">Chat</div>
        <div id="events" class="col">Events</div>
      </div>
  
        `
    )
}

console.log("hello322233");


module.exports = buildLanding