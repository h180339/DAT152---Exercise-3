"use strict"

//import GuiHandler from './GuiHandler2';

const gui = new GuiHandler();

/*const tasks = [
    {"id":1,"title":"Paint roof","status":"WAITING"},
    {"id":2,"title":"Clean floor","status":"DONE"},
    {"id":3,"title":"Wash windows","status":"ACTIVE"}];*/

const getServerData = async ()=>{
    try {
        await fetch('broker/allstatuses')
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

        await fetch('broker/tasklist')
            .then(resolve =>{
                return resolve.json();
            })
            .then(data =>{
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
        console.log(e.message);
    }finally {
        gui.noTask();
    }
}

//update status

//TODO
window.addEventListener('load', getServerData);

gui.deleteTaskCallback = (id) => {console.log(`User has approved the deletion of task with id ${id}.`)};
gui.deleteTaskCallback = (id) => {console.log(`Observer, task with id ${id} is not removed from the view!`)};

gui.newStatusCallback = (id,newStatus) => {console.log(`User has approved to change the status of task with id ${id} to ${newStatus}.`)};
gui.newStatusCallback = (id,newStatus) => {console.log(`Observer, task with id ${id} is not set to ${newStatus} in the view!`)};


