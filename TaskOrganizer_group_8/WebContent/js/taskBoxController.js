/*
This shows how the TaskBox class should be interacted with.
 This will have to be put into the final controller class.

 */

let addTaskCallback = async (task) => {
    console.log(JSON.stringify(task))
    try {
        const response = await fetch('broker/task', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        await response.json().then(data => {
            let result = response;
            taskbox.close();
            console.log(data);
            let resultTask = new Task();
            console.log(resultTask)
            gui2.showTask(resultTask)
        });
    } catch (e) {
        console.log(`Got error ${e.message}.`)
    }
};

const tasksmodaleboxdiv = document.getElementById("taskbox");
const tasknewbutton = document.getElementById("newTask");

taskbox = new TaskBox(tasksmodaleboxdiv);
let taskBoxStatus = ["Waiting", "Done", "Active"];
const gui2 = new GuiHandler();
taskbox.allstatuses = taskBoxStatus;
taskbox.onsubmit = addTaskCallback;
tasknewbutton.addEventListener("click", () => {
    taskbox.show()
}, true);