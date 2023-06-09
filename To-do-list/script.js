// Task counter for unique IDs
let taskId = 1;

// Add task to the list
function addTask() {
  const taskName = document.getElementById("task-name").value;
  const category = document.getElementById("category").value;
  const deadline = document.getElementById("deadline").value;
  const priority = document.getElementById("priority").value;
  const labels = document.getElementById("labels").value.split(",");

  if (taskName.trim() === "") {
    alert("Please enter a task name.");
    return;
  }

  const task = {
    id: taskId++,
    name: taskName,
    category: category,
    deadline: deadline,
    priority: priority,
    labels: labels
  };

  createTaskElement(task);
  clearForm();
}

// Create a new task element
function createTaskElement(task) {
  const taskList = document.getElementById("tasks");
  const li = document.createElement("li");
  li.className = "task";
  li.innerHTML = `
    <span class="name">${task.name}</span>
    <div class="labels">${task.labels.map(label => `<span>${label}</span>`).join("")}</div>
    <div class="priority">Priority: ${task.priority}</div>
    <div class="deadline">Deadline: ${task.deadline}</div>
  `;
  taskList.appendChild(li);
}

// Clear the form fields
function clearForm() {
  document.getElementById("task-name").value = "";
  document.getElementById("category").value = "";
  document.getElementById("deadline").value = "";
  document.getElementById("priority").value = "";
  document.getElementById("labels").value = "";
}

