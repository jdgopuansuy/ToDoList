let addTaskBtn = document.querySelector("#addBtn");

//EVENT LISTENER//
addTaskBtn.addEventListener("click", addTask);

//FUNCTION//
function addTask() {
    //get value from input
    let taskInput = document.querySelector("#taskInput").value;

    //get parent node
    let taskList = document.querySelector("#taskList");

    //create child nodes
    let taskItem = document.createElement("div");
    let taskInputValue = document.createElement("input");
    taskInputValue.type = "text";
    taskInputValue.setAttribute("disabled", "");
    taskInputValue.value = taskInput;

    //create edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList = "editBtn";
    editBtn.addEventListener("click", editValue);

    //create delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList = "delBtn";
    delBtn.addEventListener("click", delValue);

    //---APPEND---//
    taskList.appendChild(taskItem);
    taskItem.appendChild(taskInputValue);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(delBtn);

    if (taskList.childElementCount >= 6) {
        //disable add button
        addTaskBtn.setAttribute("disabled", "");
        taskInputValue.setAttribute("disabled", "");

        alert("Finish a task first! You can only add 5 task on this list.")
    }

    function editValue() {
        // attribute
        taskInputValue.removeAttribute("disabled", "");
        editBtn.setAttribute("disabled", "");

        //create save button
        let saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.classList = "saveBtn";
        saveBtn.addEventListener("click", saveValue);

        //---APPEND---//
        taskItem.appendChild(saveBtn);

        function saveValue() {

            let text = "Are you sure you want to save " + taskInputValue.value + " as task?";

            if (confirm(text) == true) {

                //get new value
                let newValue = taskInputValue.value;

                //disable input attribute
                taskInputValue.setAttribute("disabled", "");
                editBtn.removeAttribute("disabled", "");

                //Hide save button
                taskItem.removeChild(saveBtn);

                //Add text to alert
                text = "Changes have been saved.";
            }
            else {
                text = "No changes have been saved.";

                //enable edit button again
                editBtn.removeAttribute("disabled", "");

                //disable input type
                taskInputValue.setAttribute("disabled", "");

                //hide save button
                taskItem.removeChild(saveBtn);

                taskInputValue.value = taskInputValue.defaultValue;

                alert(text);
            }
        }
    }
    function delValue() {
        this.parentNode.remove();
        addTaskBtn.removeAttribute("disabled", "");
        taskInputValue.removeAttribute("disabled", "");
    }
}