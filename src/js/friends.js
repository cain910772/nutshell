const friendsList = (currentUser) => {
    const putToDom = $("#friends")
    console.log(putToDom);
    putToDom.append(
            `
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Friends List</h5>
              <p class="card-text">.</p>
            </div>
            <div class="card-body">
              <a href="#" class="card-link">Add New Friend</a>
              <a href="#" class="card-link">Delete Friend</a>
            </div>
          </div>
    
            `
        )
    }
    console.log("test tesfvfdvfdvfdv");

    module.exports = friendsList