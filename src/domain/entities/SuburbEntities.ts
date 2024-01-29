export class SuburbEntites{
    constructor(private name:string,private state:string,private postcode:number,private id?:number){}
    getName():string{
        return this.name;
    }

    getState():string{
        return this.state
    }

    getPostCode():number{
        return this.postcode
    }
    getId():number|undefined{
        return this.id;
    }
    setName(name:string){
        this.name=name
    }
    setState(state:string){
        this.state=state
    }
    setPostCode(postcode:number){
        this.postcode=postcode
    }
    setId(id:number){
        this.id = id
    }
}