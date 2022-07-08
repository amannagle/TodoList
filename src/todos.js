class todo
{
    static Alltodos=[];
    constructor(project,name)
    {
        this.project=project;
        this.name=name;
        todo.Alltodos.push(this);
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