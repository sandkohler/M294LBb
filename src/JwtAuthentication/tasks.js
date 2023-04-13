// Get the task ID from the URL path
const taskId = window.location.pathname.split('/').pop();

// Fetch the task from the API
async function fetchTask(taskId) {
    const token = localStorage.getItem('token');
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

// Load the task details into the DOM
async function loadTaskDetails() {
    try {
        const task = await fetchTask(taskId);

        // Update the UI with the task details
        const taskList = document.getElementById("task-list");
        const li = document.createElement("li");
        li.dataset.id = task.id;
        li.innerHTML = `
            ${task.title}
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(li);
    } catch (error) {
        console.error(error);
    }
}

loadTaskDetails();
