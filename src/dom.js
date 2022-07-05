import { todo } from "./todos";
import { project } from "./project";

const default_project = new project('Inbox',[]);
let current_project = default_project;
function interactWithDom()
{
    addListenersToElements();
}

function addListenersToElements()
{
    addListenerToProjectCreate();
    addListenerToAddTasksDiv();
    addListenerToAddTasksAndCancel();
}
function addListenerToAddTasksDiv()
{
    const addtasksbutton = document.querySelector('#add-task-div-button');
    addtasksbutton.addEventListener('click',function(){
        document.querySelector('.task-buttons').style['display']='block';
        addtasksbutton.style['display']='none';
    })
}
function addListenerToAddTasksAndCancel()
{
    document.querySelector('#add-task').addEventListener('click',addTask)
    document.querySelector('#cancel').addEventListener('click',cancelTask)
}
function addTask(e)
{
    e.preventDefault();
    const task_name = document.querySelector('#add-task-input').value;
    const new_task = new todo(current_project,task_name);
    current_project.addTodo(new_task);
}

function cancelTask()
{
    const addtasksbutton = document.querySelector('#add-task-div-button');
    document.querySelector('.task-buttons').style['display']='none';
    addtasksbutton.style['display']='block';

}
function addListenerToProjectCreate()
{
    const addProjectButton = document.querySelector('#add-project');
    addProjectButton.addEventListener('click',function(e)
    {
        e.preventDefault();
        const name = document.querySelector('#add-project-input').value;
        if(name == null || name == '')
        return;
        const new_project = new project(name,[]);
        render_project();
        document.querySelector('#add-project-form').reset();
    })
}
function render_tasks()
{

}
function render_project()
{
   const length = project.allprojects.length;
   addProjectToDom(project.allprojects[length-1]);
}
function addProjectToDom(project)
{
    const projectdiv = document.querySelector('div.project');
    const new_div = document.createElement('div');
    new_div.classList.add('project-header-div');
    new_div.innerHTML=`<li class="project-header">${project.name}</li>
    <button class="btn-delete-project"><i class="fa-solid fa-trash"></i></button>`;
    projectdiv.appendChild(new_div);
}

export {interactWithDom}