// file to eventually hold create task form as modal popup
const makeNewTask = () => {
    const putOnPage = $("#tasks")
    putOnPage.append(
        `
        <div class="modal" id="TaskModal">
            <div class="modal-content">
                <span class="close-button" id="Task__modal__close">&times;</span>
                <h1>Create a new task.</h1>
                <input type="text" id="Tasks__input__title" placeholder="Title">
                <input type="date" id="Tasks__input__date">
                <button id="Tasks__button__submit">Submit</button>
            </div>
        </div>
        `
    )
}
console.log("sdhyvdsyfvdsfc");

module.exports = makeNewTask