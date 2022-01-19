export class taskDetails {
    fromDate: string
    toDate: string;
    bu: string;
    taskDesc: string;
    exportData: boolean=false;

    constructor(
        fromDate: string,
        toDate: string,
        bu: string,
        taskDesc: string,
        exportData:boolean
    ){
        this.fromDate=fromDate;
        this.toDate=toDate;
        this.bu=bu;
        this.taskDesc=taskDesc;
        this.exportData
    }
}