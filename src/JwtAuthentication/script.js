// Prüft ob ich eingelogt bin
// Hole den Token aus dem LocalStorage
const token = localStorage.getItem('token');

// Setze den Token als Authorization-Header
const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
};

// Wenn der Token nicht vorhanden ist, leite den Benutzer auf die Login-Seite weiter
if (!token) {
    window.location.href = '/src/JwtAuthentication/Login/login.html'; // anpassen zur Login-URL deiner Seite
}

/* Ein eingeloggter Benutzer sollte eine Übersicht aller Aufgaben haben
mit Get http://localhost:3000/auth/jwt/tasks bekommen, diese Daten
bekommt man als JSON angezeigt diese möchte ich aber fetchen und in einem 
schönen UI angezeigt bekommen.

Mit Get http://localhost:3000/auth/jwt/task/{taskId} kann man eine bestimmte
Aufgabe anzeigen lassen */

/* Benutzer kann mit einem Formular eine Aufgabe hinzufügen
dies kann ich mit Post http://localhost:3000/auth/jwt/tasks machen dazu
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
Put http://localhost:3000/auth/jwt/tasks kann man eine bestimmte
Aufgabe updaten */

/* Benutzer sollte eine Aufgabe löschen können mit
Delete http://localhost:3000/auth/jwt/task/{taskId} kann man eine
bestimmte Aufgabe löschen*/

const taskList = document.getElementById("task-list");
const addTaskForm = document.querySelector("form");
const taskTitleInput = document.getElementById("title");

// Setze den Token als Authorization-Header
function getHeaders() {
    /* const token = localStorage.getItem('token'); wird schon oben definiert */
    return {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };
}

// Fetcht alle Aufgaben beim laden der Seite
window.addEventListener("load", () => {
    fetchTasks();
});

// Fetcht alle Aufgaben von der API
async function fetchTasks() {
    const response = await fetch("http://localhost:3000/auth/jwt/tasks", {
        headers: getHeaders()
    });
    const tasks = await response.json();

    tasks.forEach(task => {
        addTaskToList(task);
    });
}

// Eine Aufgabe zur Liste hinzufügen
function addTaskToList(task) {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    li.innerHTML = `
    ${task.title}
        <img class="edit" src="./Grafiken/edit-PhotoRoom.png-PhotoRoom.png" alt="edit">
        <img class="delete" src="./Grafiken/delete-PhotoRoom.png-PhotoRoom.png" alt="delete">
        `;
    taskList.appendChild(li);
}

// Handelt den submit Button um eine neue Aufgabe hinzuzufügen
addTaskForm.addEventListener("submit", async event => {
    event.preventDefault();

    const task = {
        title: taskTitleInput.value,
        completed: false
    };

    const response = await fetch("http://localhost:3000/auth/jwt/tasks", {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(task)
    });

    const newTask = await response.json();
    addTaskToList(newTask);
    taskTitleInput.value = "";
});

// Handelt edit & delete, um eine Aufgabe zu löschen oder zu updaten
taskList.addEventListener("click", async event => {
    const target = event.target;

    if (target.classList.contains("edit")) {
        const li = target.parentElement;
        const taskId = li.dataset.id;
        const taskTitle = li.firstChild.textContent;
        const newTitle = prompt("Enter a new title for this task (max. 23 characters):", taskTitle.substring(0, 23));

        if (newTitle !== null && newTitle.trim() !== "") { // Überprüfe, ob der Titel nicht leer ist oder nur aus Leerzeichen besteht
            const updatedTask = {
                id: taskId,
                title: newTitle.trim().substring(0, 23), // Entferne Leerzeichen am Anfang und am Ende des Titels mit maximal 23 Zeichen
                completed: false
            };
            const response = await fetch(`http://localhost:3000/auth/jwt/tasks`, {
                method: "PUT",
                headers: getHeaders(),
                body: JSON.stringify(updatedTask)
            });

            const updatedTaskData = await response.json();
            li.firstChild.textContent = updatedTaskData.title;
        } else {
            alert("Please enter a valid task title."); // Gib eine Fehlermeldung aus, wenn der Titel leer ist oder nur aus Leerzeichen besteht
        }
    } else if (target.classList.contains("delete")) {
        const li = target.parentElement;
        const taskId = li.dataset.id;

        const response = await fetch(`http://localhost:3000/auth/jwt/task/${taskId}`, {
            method: "DELETE",
            headers: getHeaders()
        });

        if (response.ok) {
            li.remove();
        }
    }
});