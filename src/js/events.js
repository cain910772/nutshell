



const makeEvent = (currentUser) => {
    const eventDom = $("#events")
    console.log(eventDom);
    eventDom.append(
            `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Events</h5>
              <h6 class="card-subtitle mb-2 text-muted">Upcoming Events</h6>
              <p class="card-text"></p>
              <a href="#" class="card-link">Add Event</a>
              <a href="#" class="card-link">Remove Event</a>
            </div>
          </div>
            `
        )
    }
    console.log("boop");

    module.exports = makeEvent