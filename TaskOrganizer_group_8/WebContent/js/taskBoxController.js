/*
This shows how the TaskBox class should be interacted with.
 This will have to be put into the final controller class.

 */


const tasksmodaleboxdiv = document.getElementById("taskbox");
const tasknewbutton = document.getElementById("newTask");

taskbox = new TaskBox(tasksmodaleboxdiv);
let taskBoxStatus = ["Waiting", "Done", "Active"];
const gui2 = new GuiHandler();
taskbox.allstatuses = taskBoxStatus;
taskbox.onsubmit = (task) => {
    gui2.showTask(task);
    taskbox.close()
};
tasknewbutton.addEventListener("click", () => {
    taskbox.show()
}, true);