"use strict";


class TaskBox {

    constructor() {
        this.allstatuses = [];
        this.onsubmit();
    }

    close() {
        modal.style.display = "none";
    }
}


function addTask() {

    let button = document.getElementById("newTask");

// Get the modal
    let modal = document.getElementById("taskbox");

// Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
    button.onclick = function () {
        modal.style.display = "block";
    };


// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

window.addEventListener('DOMContentLoaded', addTask, true);


const tasksmodaleboxdiv = document.getElementById("taskbox")
const tasknewbutton = document.getElementById("newtask").getElementsByTagName("button")[0]

tasknewbutton.addEventListener("click", (event) => {
    taskbox.show()
}, true)
taskbox = new TaskBox(tasksmodaleboxdiv)
taskbox.allstatuses = statuses
taskbox.onsubmit = (task) => {
    a
    console.log(`New task '${task.title}' with initial status ${task.status} is added by the user.`)
    taskbox.close()
}

document.getElementById('newtask').getElementsByTagName("button")[0].disabled = false
