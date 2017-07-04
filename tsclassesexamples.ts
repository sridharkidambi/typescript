class samplec {

     fullname:string="";
    constructor(public name:string,public state:string,public city:string){
            this.fullname=name+"-"+state+"-"+city;
    }
}

var objsamplec=new samplec("A","B","C");
console.log(objsamplec.fullname);

class inhersamplec extends samplec{
    mycount:number=0;
    constructor(public name:string,public state:string,public city:string,public count:number)
    { 
        super(name,state,city);
        this.mycount=count;
        
    }

    printfinalnamecount(){
        console.log(this.fullname+" prinintFinal "+this.mycount);
    }
}
var objinhersamplec=new inhersamplec("a","b","c",5);
objinhersamplec.printfinalnamecount();
console.log(objinhersamplec.count);
var realusers={
    email:"k.s@yahoo.com",
    firsntmae:"sridhar",
    lastName:"kidambi",
    sayhi(){
        console.log("say hi");
    }
}
console.log(realusers.email);
realusers.sayhi();


interface Users{
    fname:string;
    lname?:string;
    email?:string;
}

function userdtls(user:Users):string{
    return `the user name is ${user.fname}   ${user.lname}  ${user.email}`;
}
var newuser={
    fname:"fname",
    // lname:"lname",
    email:"email"
}
console.log(userdtls(newuser));

interface InvoiceT{
    (name:string,total:number):void;
}
var myinvoice:InvoiceT;
myinvoice=function(a,t){
    console.log(a);
     console.log(t);
}

namespace posting{
export interface Ipost{
    name:string;
    email:string;
}

 export class post implements Ipost{
    name:string;
    email:string;
    constructor(opost:Ipost){
        this.name=opost.name;
        this.email=opost.email;
    }

    printpos(){
        console.log(this.name);
        console.log(this.email);
    }
}
}
var opost= new posting.post({email:"s.k@gmail.com",name:"pname"});
opost.printpos();

//aysncronous  THIS. example

class myInvice{
    item:number=0;
    constructor(item:number){
        this.item=item;
    }

    printtotal(){
        console.log(this.item);
    }

// this. in this will throw  error:
    // printcallLater(time:number){
    //     setTimeout(function() {
    //         console.log(this.item);
    //     }, time);
    // }

    printcallLater(time:number){
        setTimeout(()=> {
            console.log(this);
        }, time);
    }
}

var myInvoice=new myInvice(500);
myInvoice.printtotal();
myInvoice.printcallLater(1000);



// 