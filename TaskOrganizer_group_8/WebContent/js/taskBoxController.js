/*
This shows how the TaskBox class should be interacted with.
 This will have to be put into the final controller class.

 */

let addTaskCallback = async (task) => {
    try {
        const response = await fetch('broker/task', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        taskbox.close();
        await response.json().then(data => {
            let resultTask = {
                id: data.task.id,
                title: data.task.title,
                status: data.task.status
            };
            gui.showTask(resultTask);
        });
    } catch (e) {
        console.log(`Got error ${e.message}.`)
    }
};

const tasksmodaleboxdiv = document.getElementById("taskbox");
const tasknewbutton = document.getElementById("newTask");

taskbox = new TaskBox(tasksmodaleboxdiv);
let taskBoxStatus = ["WAITING", "DONE", "ACTIVE"];
const gui2 = new GuiHandler();
taskbox.allstatuses = taskBoxStatus;
taskbox.onsubmit = addTaskCallback;
tasknewbutton.addEventListener("click", () => {
    taskbox.show()
}, true);