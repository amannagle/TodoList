class project
{
    static allprojects =[];
    constructor(name,todos)
    {
        this.name=name;
        this.todos=todos;
        project.allprojects.push(this);
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