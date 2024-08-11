document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskNameInput = document.getElementById('task-name');
    const taskDatetimeInput = document.getElementById('task-datetime');
    const taskName = taskNameInput.value.trim();
    const taskDatetime = taskDatetimeInput.value;

    if (taskName === '') {
        alert('Please enter a task name.');
        return;
    }

    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';

    const taskInfo = document.createElement('div');
    taskInfo.className = 'task-info';

    const taskNameElement = document.createElement('div');
    taskNameElement.className = 'task-name';
    taskNameElement.textContent = taskName;

    const taskDatetimeElement = document.createElement('div');
    taskDatetimeElement.className = 'task-datetime';
    taskDatetimeElement.textContent = taskDatetime ? `Due: ${new Date(taskDatetime).toLocaleString()}` : '';

    taskInfo.appendChild(taskNameElement);
    taskInfo.appendChild(taskDatetimeElement);

    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit';
    editButton.addEventListener('click', () => {
        taskNameInput.value = taskNameElement.textContent;
        taskDatetimeInput.value = taskDatetime;
        taskList.removeChild(taskItem);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskActions.appendChild(completeButton);
    taskActions.appendChild(editButton);
    taskActions.appendChild(deleteButton);

    taskItem.appendChild(taskInfo);
    taskItem.appendChild(taskActions);

    taskList.appendChild(taskItem);

    taskNameInput.value = '';
    taskDatetimeInput.value = '';
}
