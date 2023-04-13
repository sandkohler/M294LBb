// Prüft ob ich eingelogt bin
// Hole den Token aus dem LocalStorage
const token = localStorage.getItem('token');

// Setze den Token als Authorization-Header
const headers = {
    'Authorization': `Bearer ${token}`
};

// Wenn der Token nicht vorhanden ist, leite den Benutzer auf die Login-Seite weiter
if (!token) {
    window.location.href = '/src/JwtAuthentication/login.html'; // anpassen zur Login-URL deiner Seite
}



/*

// Führe die GET-Anfrage mit dem Authorization-Header aus
fetch('http://localhost:3000/auth/jwt/tasks', {
    method: 'GET',
    headers: headers
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Führe die GET-Anfrage mit dem Authorization-Header aus
fetch('http://localhost:3000/auth/jwt/tasks', {
    method: 'GET',
    headers: headers
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Fetch all tasks from API
async function fetchTasks() {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
        alert('Sie sind nicht eingeloggt!');
        return;
    }

    // Set Authorization header with JWT token
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    try {
        // Fetch tasks with Authorization header
        const response = await fetch("http://localhost:3000/auth/jwt/tasks", { headers });
        const tasks = await response.json();

        // Display tasks on page
        tasks.forEach(task => {
            addTaskToList(task);
        });
    } catch (error) {
        console.log(error);
    }
} */
