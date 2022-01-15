import { AddformComponent } from "./addform/addform.component";


export class Employee {
    
    id!: number;
    name! : string;
    profilepic!:string;
    salary!:Number;
    gender!:String;
    startDate!:string;
    note!:string;
    department:string[]=[];
    
    
}
