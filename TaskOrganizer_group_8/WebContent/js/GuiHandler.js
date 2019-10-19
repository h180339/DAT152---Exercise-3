"use strict";

class GuiHandler {
    constructor() {
        this.tasks = [];
        this.allstatuses = [];
        this.deleteTaskCallbackArray = [];
        this.newStatusCallbackArray = [];
    }

    set deleteTaskCallback(funk) {
        this.deleteTaskCallbackArray.push(funk);
    }

    set newStatusCallback(funk) {
        this.newStatusCallbackArray.push(funk);
    }

    removeTask = (id) => {
        let item = document.getElementById(id);
        item.parentElement.removeChild(item);
        this.noTask();

    };

    showTask = (task) => {
        let tekstloop = `<select class="select-element">
        <option value="0" selected="">&lt;Modify&gt;</option>`;
        for (const status of this.allstatuses) {
            let disb = ``;
            if (task.status === status) {
                disb = ` disabled=""`;
            }
            tekstloop += `
            <option value="${status}"${disb}>${status}</option>
            `;
        }
        tekstloop += `</select>`;
        let tr = document.createElement("tr");
        tr.setAttribute("id", task.id);
        let td1 = document.createElement("td");
        td1.textContent = task.title;
        let td2 = document.createElement("td");
        td2.textContent = task.status;
        let td3 = document.createElement("td");
        td3.innerHTML = tekstloop;
        let tableButton = document.createElement("button");
        tableButton.setAttribute("id", "rbtn");
        tableButton.setAttribute("class", "remove-btn");
        tableButton.setAttribute("type", "button");
        tableButton.textContent = "Remove";
        let td4 = document.createElement("td")
        td4.appendChild(tableButton);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        let tbody = document.getElementById("tbody");
        tbody.insertBefore(tr, tbody.childNodes[0]);
        let buttons = document.getElementsByClassName('remove-btn');
        buttons[0].addEventListener('click', this.onRemoveButtonClick);
        let selectors = document.getElementsByClassName('select-element');
        selectors[0].addEventListener('change', this.onUpdateStatus)
        this.noTask();
    };

    noTask = () => {
        let tbody = document.getElementById('tbody');
        let count = tbody.rows.length;

        if (count > 0) {
            document.getElementById('message').textContent = `Found ${count} tasks.`;

        } else {
            document.getElementById('message').textContent = `No task was found`;
        }
    }

    updateTask = (task) => {
        document.getElementById(task.id).getElementsByTagName('td')[1].textContent = `${task.status}`;
        const test = document.getElementById(task.id).getElementsByTagName('td')[2];
        test.querySelector('.select-element').value = '0';
        const optionEl = test.getElementsByTagName('option');
        for (let i = 0; i < optionEl.length; i++) {
            if (optionEl[i].value === task.status) {
                optionEl[i].disabled = true;
            } else {
                optionEl[i].disabled = false;
            }
        }

    }

    onRemoveButtonClick = (event) => {
        let button = event.currentTarget;
        let tableRow = button.parentElement.parentElement;
        let taskName = tableRow.getElementsByTagName('td')[0].textContent;
        if (window.confirm(`delete task '${taskName}' ?`)) {
            this.deleteTaskCallbackArray.forEach((x) => x(tableRow.id))
        }
    }

    onUpdateStatus = (event) => {
        let selector = event.currentTarget;
        //let tableRow = selector.parentElement.parentElement;
        let taskName = selector.parentElement.parentElement.getElementsByTagName('td')[0].textContent;
        let selectedValue = event.currentTarget.value;
        if (window.confirm(`Set '${taskName}' to ${selectedValue}`)) {
            this.newStatusCallbackArray.forEach((x) => x(selector.parentElement.parentElement.id, selectedValue))
        }
    }
}

