(()=>{"use strict";class e{constructor(e,t){this.name=e,this.todos=t}getName(){return this.name}setName(e){this.name=e}getTodos(){return this.todos}addTodo(e){this.todos.push(e)}}document.querySelector("#add-project").addEventListener("click",(function(t){t.preventDefault();const o=document.querySelector("#add-project-input").value;!function(e){const t=document.querySelector("div.project"),o=document.createElement("div");o.classList.add("project-header-div"),o.innerHTML=`<li class="project-header">${e.name}</li>\n    <button class="btn-delete-project"><i class="fa-solid fa-trash"></i></button>`,t.appendChild(o)}(new e(o,[])),document.querySelector("#add-project-form").reset()}))})();