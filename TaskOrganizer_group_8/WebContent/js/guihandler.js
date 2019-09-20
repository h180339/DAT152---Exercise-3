"use strict";

class GuiHandler {


    numOfTasks;

    constructor() {
        this._text1 = document.createElement("p");
        this._text1.innerText = 'vet isje om dette e måten å gjøre det på men, oppgaven e rar';
        document.body.appendChild(this._text1);

    }

    //Display a new task at the the top of the viewed list. The id of task must not already exist in the view.
    showTask(task) {
        let newTable;
        //TODO: IF: det eksisterer en tabell i dokumentet: Hent den, og legg til raden på toppen av tabellen
        // ELSE: Lag ny tabell, og legg til raden i tabellen.

        if (document.getElementsByTagName("tbody").length === 0) {
            newTable = document.createElement("table")
        } else {
            newTable = document.getElementsByTagName("tbody")
        }

        // Create tr element
        const newRow = document.createElement("tr")
        const newCell0 = document.createElement("td")
        const newCell1 = document.createElement("td")


        /* Add the cells to the table row */
        newRow.appendChild(newCell0)
        newRow.appendChild(newCell2)
        newRow.insertBefore(newCell1, newCell2)

        /* Create text node */
        const taskTitle = document.createTextNode(task.title)
        const taskStatus = document.createTextNode(task.status)

        /* Put text in the table cells */
        newCell0.appendChild(taskTitle)
        newCell1.appendChild(taskStatus)

        /* Add the row to the table */
        newTable.appendChild(newRow)
    }

    //Update the displayed status of task. The task (i.e. the task id) must already exist in the view.
    update(task) {
        //TODO:

    }

    //Removes task from the view. A task with the given id must exist in the view.
    removeTask(id) {
        //TODO:

    }

    //Tells GuiHandler that the list of tasks are empty, e.g. when the database has no tasks.
    noTask() {
        //TODO:

    }


}
