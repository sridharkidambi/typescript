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


type mycustomtype=Array<string|number>;
let mycustom:mycustomtype=["a","b","lsfdskldfjklj"];
let mycustom_num:mycustomtype=[1,2,3,4,556675,56];
console.log(mycustom);console.log(mycustom_num);

var unionarrayexample:string[]|string;

unionarrayexample=["q","vnfvsdbf","sdjsdfjj"];
console.log(unionarrayexample);
unionarrayexample="Sridhar Kidambi single string";
console.log(unionarrayexample);

let myconditonname:string ="chEnnai";
let mynormalname:string ="sridhar";
if (!(myconditonname=="chennai" || mynormalname=="sridhar")){
    console.log("i am from chennai");
}
else if(myconditonname!="chennai"){
     console.log("i am not from chennai");
}

// for in for of

let mysimplearray:number[]=[4,3,2,1,5,6,8];

mysimplearray.forEach(element => {
    console.log(element.toString());
});

for(let item in mysimplearray){
    console.log(item);
}
console.log("new list : ")
for(let item of mysimplearray){
    console.log(item);
}