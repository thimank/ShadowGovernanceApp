
export class endUser{
    id: number;
    bu: string;
    date: string;
    email: string;
    name: string;
    pMentor: string;
    pName: string;
    taskDesc: string;
    
    constructor(
        id: number,
        bu: string,
        date: string,
        email: string,
        name: string,
        pMentor: string,
        pName:string,
        taskDesc: string
    ){
        this.id=id;
        this.bu=bu;
        this.date=date;
        this.email=email;
        this.name=name;
        this.pMentor=pMentor;
        this.pName=pName;
        this.taskDesc=taskDesc;
    }
}