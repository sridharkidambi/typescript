//   class hello{
//     name:string;
//     public constructor()
//     {
//         this.name="hello Sridhar!!!";
//         console.log(this.name);
//     }
// }

function hime(){
    console.log("hello Sridhar!!!");
}
hime();

var text1:string ="Sridhar";
let text2:boolean=true;
const text3:number =1.3;

var msg:string =" i am giving space ";
console.log(text1+msg+text2+msg+text3);

var msg1:string =`i am giving ${msg} space `;
console.log(msg1);

var bvalue:boolean=true;
console.log(bvalue);

var age:number=33;
console.log(age);

var myarray:number[]=[1,2,3];

var payme:[number,string,number,string,boolean];
payme=[1,"2",3,"4",true];

enum approvalStatus{Approved,Rejected,Pending};
var caseStatus:approvalStatus=approvalStatus.Pending;

var api:any[]=[1,2,"d",5,true];

function alertme(param1:string):void{
    // alert(param1);
    console.log(param1);
}

alertme("zsrskdjfkjnf kidambi");


type mycustomtype=Array<string>;
let mycustom:mycustomtype=["a","b","lsfdskldfjklj"];
console.log(mycustom);