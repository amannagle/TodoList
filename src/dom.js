import { todo } from "./todos";
import { project } from "./project";

function interactWithDom()
{
    addListenersToElements();
}

function addListenersToElements()
{
    addListenerToProjectCreate();
}

function addListenerToProjectCreate()
{
    const addProjectButton = document.querySelector('#add-project');
    addProjectButton.addEventListener('click',function(e)
    {
        e.preventDefault();
        const name = document.querySelector('#add-project-input').value;
        const new_project = new project(name,[]);
        addProjectToDom(new_project);
        document.querySelector('#add-project-form').reset();
    })
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