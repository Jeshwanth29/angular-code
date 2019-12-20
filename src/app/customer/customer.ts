export class Customer{
	public cust_id:number;
	public name:String;
	public dob:Date;
	public contact:number;
	public address:String;
	public username:String;
	public password:String;
	public aadhar_card:number;
	public pan_card:String;
	public branch_id:String;
	public customer_Acc_no:String;
	public open_date:Date;
	public balance:number;
	public account_id:String;

	constructor( cust_id:number, name:String, dob:Date, contact:number, address:String,username:String,password:String, aadhar_card:number, pan_card:String, branch_id:String, customer_Acc_no:String,open_date:Date, balance:number, account_id:String)
{
	this.cust_id=cust_id;
	this.name=name;
	this.dob=dob;
	this.contact=contact;
	this.address=address;
	this.username=username;
	this.password=password;
	this.aadhar_card=aadhar_card;
	this.pan_card=pan_card;
	this.branch_id=branch_id;
	this.customer_Acc_no=customer_Acc_no;
	this.open_date=open_date;
	this.balance=balance;
	this.account_id=account_id;
}
}

