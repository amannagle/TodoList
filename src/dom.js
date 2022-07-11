import { todo } from "./todos";
import { project } from "./project";
let current_project;
function createDefault()
{
let default_project = new project('default',[]);
 current_project = default_project;
}
function interactWithDom()
{
    project.getProjectsFromLocalStorage();
    todo.getTasksFromLocalStorage();
    if(project.allprojects.length == 0)
     {
         createDefault();
     }
    else
    current_project = project.allprojects[0];
    render_projects();
    render_task(current_project);
    addListenersToElements();
}

function addListenersToElements()
{
    addListenerToProjectCreate();
    addListenerToAddTasksDiv();
    addListenerToAddTasksAndCancel();
    addListenerToProjectHeaders();
    addListenerToProjectDelete();
    addListenerToTaskDelete();
    
}
function updateLocalStorage()
{
    localStorage.setItem('items', JSON.stringify(project.allprojects));
}
function addListenerToTaskDelete()
{
    const tasks_div = document.querySelector('.tasks');
    tasks_div.addEventListener('click',function(e)
    {
        if(e.target.tagName.toLowerCase() == 'span')
        {
            const task_name = e.target.parentNode.textContent;
            let todo_object =todo.findtodo(task_name);
            const project_obj = current_project;
            const index = project_obj.todos.indexOf(project_obj);
            project_obj.todos.splice(index,1);
            render_task(project_obj); 
            updateLocalStorage();
        }
    })
}
function addListenerToProjectDelete()
{
    const projectdiv = document.querySelector('div.project');
    projectdiv.addEventListener('click',function(e)
    {
        if(e.target.tagName.toLowerCase() == 'i')
        {
            const project_name = e.target.parentNode.parentNode.textContent.toString().trim();
            let project_obj = project.findProject(project_name);
            const index = project.allprojects.indexOf(project_obj);
            if(index == 0)
            {
                return;
            }
            project.allprojects.splice(index,1);
            if(current_project == project_obj)
            {
                current_project=project.allprojects[0];
            }
            project_obj=null;
            updateLocalStorage();
            render_projects();
            render_task(current_project);
        }
    })

}
function addListenerToProjectHeaders()
{
    const projectdiv = document.querySelector('div.project');
    projectdiv.addEventListener('click' ,function(e)
    {
        if(e.target.tagName.toLowerCase() == 'li')
        {
            const projectname = e.target.textContent;
            const project_obj = project.findProject(projectname);
            if(project_obj != undefined)
            {
                current_project=project_obj;
                render_task(project_obj)
            }
        }

    })   
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
    if (task_name == '' || task_name == null)
    return;
    if(current_project.todos.find(element=>element.name == task_name))
    {
        alert('please add unique tasks!');
        document.querySelector('#add-task-form').reset();
        return;
    }
    const new_task = new todo(task_name);
    current_project.todos.push(new_task);
    render_task(current_project);
    updateLocalStorage();
    document.querySelector('#add-task-form').reset();
    cancelTask();
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
        if(project.findProject(name))
        {
            alert('choose different name');
            document.querySelector('#add-project-form').reset();
            return;
        }

        const new_project = new project(name,[]);
        updateLocalStorage();
        render_projects();
        current_project=new_project;
        render_task(new_project);
        document.querySelector('#add-project-form').reset();
    })
}
function render_task(project_obj)
{
    const tasks_div = document.querySelector('.tasks');
    tasks_div.innerHTML=`<h2>${project_obj.name}</h2>`
    project_obj.todos.forEach((todo)=>{
        addtodoToDom(todo,tasks_div)
    })
}  
function addtodoToDom(todo,parentdiv)
{
    const task_div = document.createElement('div');
    task_div.classList.add('task');
    task_div.innerHTML=`<span class="custom-check"></span><p class="taskname">${todo.name}</p></div>`
    parentdiv.appendChild(task_div);
}
function render_projects()
{
    const projectdiv = document.querySelector('div.project');
    projectdiv.innerHTML="<li><h2>Projects</h2></li>";
    project.allprojects.forEach(project=>{
    
        addProjectToDom(project);
       
   })
}
function addProjectToDom(newproject)
{
    const projectdiv = document.querySelector('div.project');
    const new_div = document.createElement('div');
    new_div.classList.add('project-header-div');
    new_div.innerHTML=`<li class="project-header">${newproject.name}</li>
    <button class="btn-delete-project"><i class="fa-solid fa-trash"></i></button>`;
    projectdiv.appendChild(new_div);
}

export {interactWithDom}