export class Manager{
	public employee_id:String;
	public employee_name:String;
	public dob:Date;
	public contact:number;
	public mail:String;
	public username:String;
	public password:String;
	public employee_role:String;
	public branch_id:String;

	constructor(employee_id:String, employee_name:String, dob:Date, contact:number, mail:String,username:String,password:String, employee_role:String, branch_id:String)
    {
    	this.employee_id=employee_id;
    	this.employee_name=employee_name;
    	this.dob=dob;
    	this.contact=contact;
    	this.mail=mail;
    	this.username=username;
    	this.password=password;
    	this.employee_role=employee_role;
    	this.branch_id=branch_id;

    }
}