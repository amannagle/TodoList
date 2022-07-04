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
        console.log('addprojectbutton was clicked');
    })
}

export {interactWithDom}