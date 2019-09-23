class GuiHandler {
    constructor(){
        this.task= [];
        this.status = [];
    }
    removeTask = (id) => {
    let item = document.getElementById(id.srcElement.parentElement.parentElement.id);
    item.parentElement.removeChild(item);

    };

showTask = (task) => {
    const taskelement = `
        <tr id=${task.id}>
            <td>"${task.title}"</td>
            <td>"${task.status}"</td>
            <td>
                 <select class="select-element">
                    <option value="0" selected="">&lt;Modify&gt;</option>
                    <option value="WAITING">WAITING</option>
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="DONE">DONE</option>
                </select>
            </td>
        <td><button id="rbtn" class="remove-btn" 
            type="button">Remove</button></td>
        </tr>
    `;
    document.getElementById('tbody').insertAdjacentHTML('beforeend', taskelement);
}

noTask = () =>{
    if (this.task === 0) {
        document.getElementById('message').innerHTML = `Waiting for server data.`;
    } else{
        document.getElementById('message').innerHTML = `Found ${tasks.length} tasks.`;
    }
}

updateTask  = (task) => {
    const taskid = task.srcElement.value;
    const x = task.srcElement.parentElement.parentElement;
    x.getElementsByTagName('td')[1].innerHTML = `${taskid}`;

}

deleteTaskCallback = (id) => {
    const elid = id.srcElement.parentElement.parentElement.id;
    const titel = this.task[elid - 1].title;
    if(confirm(`Delete task ${titel}`)){
        console.log(`User has approved the deletion of task with id ${elid}.`);
        this.removeTask(id);
    }else{
        console.log(`Observer, task with id ${elid} is not removed from the view!`)
    }
}

newStatusCallback = (id, newStatus) => {
    const elid = id.srcElement.parentElement.parentElement.id;
    const titel = this.task[elid - 1];
    newStatus = id.srcElement.value;
    if(confirm(`Set ${titel.title} to ${newStatus}`)){
        console.log(`User has approved to change the status of task with id ${elid} to ${newStatus}.`);
        this.updateTask(event);
    }else{
        console.log(`Observer, task with id ${elid} is not set to ${newStatus} in the view!`);
    }
}
}

    const gui = new GuiHandler();
    const tasks = [
        {"id": 1, "title": "Paint roof", "status": 'WAITING'},
        {"id": 2, "title": "Clean floor", "status": 'DONE'},
        {"id": 3, "title": "Wash windows", "status": 'ACTIVE'}];

//displays tasks in browser
    gui.task = tasks;
    gui.task.forEach(el => {
    gui.showTask(el);
});

//remove item
let btn = document.querySelectorAll('.remove-btn');
btn.forEach(el => {
    el.addEventListener('click', gui.deleteTaskCallback)
});

//update status
let select_element = document.querySelectorAll('.select-element');
select_element.forEach(el => {
    el.addEventListener('change', gui.newStatusCallback)
});

gui.noTask();