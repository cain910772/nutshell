


const makeNewNews = (currentUser) => {
    const putOnDom = $("#news")
    console.log(putOnDom);
    putOnDom.append(
            `
            <div id ="tryThis" class="card" style="width: 18rem;">
            <img class="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">NewsFeed!</h5>
              <p class="card-text"></p>
            </div>
            <div class="card-body">
              <a href="#" class="card-link">Add News Story</a>
              <a href="#" class="card-link">Delete Story</a>
            </div>
          </div>
    
            `
        )
    }
    console.log("test test");

    module.exports = makeNewNews