export class MD{
    public employee_id:string;
    public employee_name:string;
    public dob:Date;
    public contact:number;
    public mail:string;
    public username:string;
    public password:string;
    public employee_role:string;
    //public branch_id:string;

    constructor(employee_id:string, employee_name:string, dob:Date, contact:number, mail:string,username:string,password:string, employee_role:string)
    {
        this.employee_id=employee_id;
        this.employee_name=employee_name;
        this.dob=dob;
        this.contact=contact;
        this.mail=mail;
        this.username=username;
        this.password=password;
        this.employee_role=employee_role;
       // this.branch_id=branch_id;

    }
}