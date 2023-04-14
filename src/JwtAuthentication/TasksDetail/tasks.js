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

async function fetchTask(taskId, token) {
    const response = await fetch(`http://localhost:3000/auth/jwt/task/${taskId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch task: ${response.statusText}`);
    }

    return await response.json();
}

// Lädt Aufgabe in den DOM
async function loadTaskDetails() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const taskId = urlParams.get('id');
        const token = localStorage.getItem('token');

        if (!taskId) { // Prüft ob der 'id' parameter in der URL ist
            throw new Error('Task ID parameter is missing from the URL.');
        }

        const task = await fetchTask(taskId, token);

        // Updated das UI mit dem Task und dem edit Bild
        const taskList = document.getElementById("task-list");
        const li = document.createElement("li");
        li.dataset.id = task.id;
        li.innerHTML = `
      ${task.title}
      <img class="edit" src="/src/JwtAuthentication/Grafiken/edit-PhotoRoom.png-PhotoRoom.png" alt="edit">
    `;
        taskList.appendChild(li);
    } catch (error) {
        console.error(error);
        // Gibt dem Benutzer eine error message
        const taskList = document.getElementById("task-list");
        const li = document.createElement("li");
        li.innerHTML = 'Error loading task details. Please check the URL and try again.';
        taskList.appendChild(li);
    }
}

loadTaskDetails();



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

// Handlet den klick auf das edit Bild, um die Aufgabe zu Updaten
taskList.addEventListener("click", async event => {
    const target = event.target;

    if (target.classList.contains("edit")) {
        const li = target.parentElement;
        const taskId = li.dataset.id;
        const taskTitle = li.firstChild.textContent;
        const newTitle = prompt("Enter a new title for this task (max. 27 characters):", taskTitle.substring(0, 27));

        if (newTitle !== null && newTitle.trim() !== "") { // Überprüfe, ob der Titel nicht leer ist oder nur aus Leerzeichen besteht
            const updatedTask = {
                id: taskId,
                title: newTitle.trim().substring(0, 27), // Entferne Leerzeichen am Anfang und am Ende des Titels mit maximal 27 Zeichen
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
    }
});