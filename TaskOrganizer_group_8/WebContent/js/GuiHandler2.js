"use strict";

class GuiHandler {
    constructor() {
        this.allstatuses = [];
    }

    removeTask = (id) => {
        let item = document.getElementById(id);
        item.parentElement.removeChild(item);

    };

    showTask = (task) => {
        //console.log(this.allstatuses.length);
        let tekstloop = `<select class="select-element">
        <option value="0" selected="">&lt;Modify&gt;</option>`;
        for (const status of this.allstatuses) {
            let disb = ``;
            if (task.status === status) {
                disb = ` disabled=""`;
            }
            //console.log(`disabled: ${disb}`);
            tekstloop += `
            <option value="${status}"${disb}>${status}</option>
            `;
        }
        tekstloop += `</select>`;
        const taskelement = `
        <tr id=${task.id}>
            <td>"${task.title}"</td>
            <td>"${task.status}"</td>
            <td>
                ${tekstloop}
            </td>
        <td><button id="rbtn" class="remove-btn" 
            type="button">Remove</button></td>
        </tr>
    `;
        document.getElementById('tbody').insertAdjacentHTML('beforeend', taskelement);
    }

    noTask = () => {
        if (this.task === 0) {
            document.getElementById('message').innerHTML = `Waiting for server data.`;
        } else {
            document.getElementById('message').innerHTML = `Found ${tasks.length} tasks.`;
        }
    }

    updateTask = (task) => {
        document.getElementById(task.id).getElementsByTagName('td')[1].innerHTML = `${task.status}`;

    }

    deleteTaskCallback = (id) => {
    }

    newStatusCallback = (id, newStatus) => {

    }
}

const gui = new GuiHandler();
const statuses = ["WAITING", "ACTIVE", "DONE"]
const tasks = [
    {"id": 1, "title": "Paint roof", "status": 'WAITING'},
    {"id": 2, "title": "Clean floor", "status": 'DONE'},
    {"id": 3, "title": "Wash windows", "status": 'ACTIVE'}];

gui.allstatuses = statuses;
//displays tasks in browser
//gui.task = tasks;
tasks.forEach(el => {
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

//TODO
gui.noTask();

/*
<select class="select-element">
<option value="0" selected="">&lt;Modify&gt;</option>
<option value="WAITING">WAITING</option>
<option value="ACTIVE">ACTIVE</option>
<option value="DONE">DONE</option>
</select>
*/