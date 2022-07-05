class todo
{
    constructor(project,name)
    {
        this.project=project;
        this.name=name;
    }
    setName(name)
    {
        this.name=name;
    }
    getName()
    {
        return this.name;
    }
}

export{todo};