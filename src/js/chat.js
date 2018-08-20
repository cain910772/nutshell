
const newChat = (currentUser) => {
    const putToPage = $("#chat")
    console.log(putToPage);
    putToPage.append(
            `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Chat Box</h5>
              <h6 class="card-subtitle mb-2 text-muted">Select From Friends List To Chat</h6>
              <p class="card-text">Select From Friends List To Chat</p>
              <a href="#" class="card-link">New Message</a>
              <a href="#" class="card-link">Edit Message</a>
              <a href="#" class="card-link">Delete Message</a>
            </div>
          </div>
    
            `
        )
    }
    console.log("sdhyvdsyfvdsfc");

    module.exports = newChat