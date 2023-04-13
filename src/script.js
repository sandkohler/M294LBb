
/* Benutzer sollte eine Übersicht aller Aufgaben haben
mit Get http://localhost:3000/tasks bekommt man alle aufgaben
als JSON angezeigt diese möchte ich aber fetchen und in einem 
schönen UI angezeigt bekommen.

Mit Get http://localhost:3000/task/{taskId} kann man eine bestimmte
Aufgabe anzeigen lassen */

/* Benutzer kann mit einem Formular eine Aufgabe hinzufügen
dies kann ich mit Post http://localhost:3000/tasks machen dazu
muss man im Body so etwas mitgeben: 
{
  "id" : 10,
  "completed" : false,
  "title" : "Feed pets"
}
also muss ich die Benutzereingabe zu JSON umwandeln und über Post
kann die Aufgabe hinzugefügt werden.
Die Id muss der Benutzer aber nicht eingeben da dies automatisch
mitgegeben wird. */

/* Benutzer sollte eine bestehende Aufgabe updaten können mit
Put http://localhost:3000/tasks/{taskId} kann man eine bestimmte
Aufgabe updaten */

/* Benutzer sollte eine Aufgabe löschen können mit
Delete http://localhost:3000/task/{taskId} kann man eine
bestimmte Aufgabe löschen*/


const taskList = document.getElementById("task-list");
const addTaskForm = document.querySelector("form");
const taskTitleInput = document.getElementById("title");

// Fetch all tasks on page load
window.addEventListener("load", () => {
    fetchTasks();
});

// Fetch all tasks from API
async function fetchTasks() {
    const response = await fetch("http://localhost:3000/tasks");
    const tasks = await response.json();

    tasks.forEach(task => {
        addTaskToList(task);
    });
}

// Add a task to the list
function addTaskToList(task) {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    li.innerHTML = `
    ${task.title}
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  `;
    taskList.appendChild(li);
}

// Handle form submit to add a new task
addTaskForm.addEventListener("submit", async event => {
    event.preventDefault();

    const task = {
        title: taskTitleInput.value,
        completed: false
    };

    const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    });

    const newTask = await response.json();
    addTaskToList(newTask);
    taskTitleInput.value = "";
});

// Handle edit/delete button clicks
taskList.addEventListener("click", async event => {
    const target = event.target;

    if (target.classList.contains("edit")) {
        const li = target.parentElement;
        const taskId = li.dataset.id;
        const taskTitle = li.firstChild.textContent;
        const newTitle = prompt("Enter a new title for this task:", taskTitle);

        if (newTitle !== null) {
            const updatedTask = { title: newTitle };
            const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedTask)
            });

            const updatedTaskData = await response.json();
            li.firstChild.textContent = updatedTaskData.title;
        }
    } else if (target.classList.contains("delete")) {
        const li = target.parentElement;
        const taskId = li.dataset.id;

        const response = await fetch(`http://localhost:3000/task/${taskId}`, {
            method: "DELETE"
        });

        if (response.ok) {
            li.remove();
        }
    }
});