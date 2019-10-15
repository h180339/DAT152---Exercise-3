"use strict"

//import GuiHandler from './GuiHandler2';

const gui = new GuiHandler();

const getServerData = async ()=>{
    try {
        await fetch('../TaskServices/broker/allstatuses')
            .then(resolve =>{
                return resolve.json();
            })
            .then(data =>{
                    if(data.responseStatus === true){
                        data.allstatuses.forEach(el =>{
                            gui.allstatuses.push(el);
                        })
                    } else {
                        console.log(`no response`);
                    }
            });

        await fetch('../TaskServices/broker/tasklist')
            .then(resolve =>{
                return resolve.json();
            })
            .then(data =>{
                const enableButton = document.getElementById("newTask");
                enableButton.disabled = false;
                if (data.responseStatus === true){
                    data.tasks.forEach(el =>{
                        gui.tasks.push(el);
                    })
                }else {
                    console.log(`no response`)
                }
            });

        gui.tasks.forEach((task) => {
            gui.showTask(task);
        });

    } catch (e) {
        document.getElementById("serverError").innerText = "No response from server";
        console.log(e.message);
    }finally {
        gui.noTask();
    }
}
gui.deleteTaskCallback = async (id) =>{
    console.log(`User has approved the deletion of task with id ${id}.`)
    try {
        await fetch(`../TaskServices/broker/task/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
            .then(result => {
                return result.json();
            })
            .then(data =>{
                if (data.responseStatus === true){
                    gui.removeTask(id);
                }else{
                }
            })
    } catch (e) {
        console.log(`Observer, task with id ${id} is not removed from the view!`)
        console.log(e);
    }

};

gui.newStatusCallback = async (id,newStatus) => {
    const url = `../TaskServices/broker/task/${id}`;
    try {
        const response = await fetch(url,{
            method: "PUT",
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify({'status': `${newStatus}`})
        });
        try {
            const text = await response.json();
            gui.updateTask(text);
            console.log(text)
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log(error)
    }};



//update status

//TODO
window.addEventListener('load', getServerData);

/*
TASKBOX CONTROLLER STUFF.

 */
const addTaskCallback = async (task) => {
    try {
        const response = await fetch('../TaskServices/broker/task', {
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
const taskbox = new TaskBox(tasksmodaleboxdiv);
taskbox.allstatuses = gui.allstatuses;
taskbox.onsubmit = addTaskCallback;
tasknewbutton.addEventListener("click", () => {
    taskbox.show()
}, true);



//gui.newStatusCallback = (id,newStatus) => {console.log(`User has approved to change the status of task with id ${id} to ${newStatus}.`)};
//gui.newStatusCallback = (id,newStatus) => {console.log(`Observer, task with id ${id} is not set to ${newStatus} in the view!`)};


