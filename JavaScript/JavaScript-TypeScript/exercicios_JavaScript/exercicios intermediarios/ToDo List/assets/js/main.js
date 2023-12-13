const tasks = document.querySelector('.tarefas');
const input = document.querySelector('.input-new-task');
const btn = document.querySelector('.btn-add-task');

function createLi(){
    const li = document.createElement('li');
    return li;
}

input.addEventListener('keypress',function(e){
    if(e.keyCode === 13){
        if (!input.value) return;
        createTask(input.value);
    }
})

function cleanInput(){
    input.value = '';
    input.focus();
}

function createDelBtn(li){
    li.innerHTML += ' ';
    const delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.setAttribute('class', 'delete');
    delBtn.setAttribute('title', 'Delete Task');
    li.appendChild(delBtn);
}

function createTask(text){
    const li = createLi();
    li.innerHTML = text;
    tasks.appendChild(li);
    cleanInput();
    createDelBtn(li);
    saveTask(); 
}

btn.addEventListener('click',function(e){
    if (!input.value) return;
    createTask(input.value);
})

document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('delete')){
        el.parentElement.remove();
        saveTask();
    }
})

function saveTask(){
    const liTasks = tasks.querySelectorAll('li');
    const listTasks = [];

    for(let task of liTasks){
        let taskText = task.innerText;
        taskText = taskText.replace('Delete', '').trim();
        listTasks.push(taskText);
    }

    const tasksJson = JSON.stringify(listTasks);
    localStorage.setItem('tasks', tasksJson)
}


function addSavedTasks(){
    const tasks = localStorage.getItem('tasks');
    const listTasks = JSON.parse(tasks) || [];
    
    for(let task of listTasks){
        createTask(task);
    }
}

addSavedTasks();