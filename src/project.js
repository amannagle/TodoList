class project
{
    static allprojects = [];
    constructor(name,todos)
    {
        this.name=name;
        this.todos=todos;
        project.allprojects.push(this);
    }
    static getProjectsFromLocalStorage()
    {
        project.allprojects = JSON.parse(localStorage.getItem("items") || "[]");
    }
    static findProject(projectname)
    {
        return project.allprojects.find(element=>element.name == projectname);
    }
    getName()
    {
        return this.name;
    }

    setName(name)
    {
        this.name=name;
    }

    getTodos()
    {
        return this.todos;
    }
    
    addTodo(todo)
    {
        this.todos.push(todo);
    }
}

export{ project}