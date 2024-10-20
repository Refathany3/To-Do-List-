
// Selecting elements from the DOM
const taskInput = document.getElementById('taskInput');
const taskButton = document.getElementById('taskButton');
const taskList = document.getElementById('taskList');

// Adding a new task when the button is clicked
taskButton.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new li element
    const li = document.createElement('li');
    li.innerText = taskText;

    // Add a delete button to each task
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', deleteTask);
    li.appendChild(deleteButton);

    // Append the task to the list
    taskList.appendChild(li);

    // Reset the input field
    taskInput.value = '';
}

// Function to delete a task
function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
}
