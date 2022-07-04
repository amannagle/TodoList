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
    
}

export {interactWithDom}