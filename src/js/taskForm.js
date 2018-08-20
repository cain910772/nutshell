// file to eventually hold create task form as modal popup












const makeNewTask = (currentUser) => {
const putOnPage = $("#tasks")
console.log(putOnPage);
putOnPage.append(
        `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Task Name</h5>
          <h6 class="card-subtitle mb-2 text-muted">Complete By Date</h6>
          <p class="card-text">Do the dishes</p>
          <a href="#" class="card-link">New Task</a>
          <a href="#" class="card-link">Edit Task</a>
        </div>
      </div>

        `
    )
}
console.log("sdhyvdsyfvdsfc");

module.exports = makeNewTask