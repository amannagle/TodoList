import { project } from "./project";
class todo
{   static Alltodos=[];
    
    constructor(name)
    {
        
        this.name=name;
        todo.Alltodos.push(this);
    }
    static getTasksFromLocalStorage()
    {
        if( project.allprojects.length != 0 && project.allprojects != undefined)
    {
            project.allprojects.forEach(pro => {
               if(pro.todos.length != 0)
               {pro.todos.forEach(todos=>{
                todo.Alltodos.push(todos);

            })}
        });
    }
    }
    setName(name)
    {
        this.name=name;
    }
    getName()
    {
        return this.name;
    }
    static findtodo(todoname)
    {
        return todo.Alltodos.find(element=>element.name == todoname);
    }
}

export{todo};