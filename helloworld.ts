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

// functions:
// function declarations    
function gradevaluecreator(grade:number,previosgrade?:number,...subjects:string[]): string { 
if(grade >0 && grade <=40)
return "fail";
else if(grade >40 && grade <=70)
return "average score";
else
return "success garde";
}
var myfullname=(fname:string,lname:string) :string =>{
    return fname+"-"+ lname;
}

console.log(gradevaluecreator(5));
console.log(myfullname("sridhar" ,"kidambi"));

//function decclarations
 function declarFullname(fname:string,lname:string):string{
     return fname+" "+lname;
 }

//function expressions
var expfullname:(fname:string,lname:string)=>string;
expfullname= function(fname:string,lname:string){
return fname+" "+lname;
}

var combinedfullname:(fname:string,lname:string)=>string=function(fname:string,lname:string){
  return fname+" "+lname;  
}

console.log(declarFullname("Sridhar","kidambi declarFullname"));
console.log(expfullname("Sridhar","kidambi expfullname"));
console.log(combinedfullname("Sridhar","kidambi combinedfullname"));

// immediately invoked functions

var namearay:string[]=["a","b","sfsdf","sdfnjkfng"];
var counter:number=0;
(function(){
for(let icount in namearay)
counter++;
})();
console.log(counter);

// immediately invoked functions with parameters
console.log( (function(fname:string,lname:string):string{
console.log(fname +" log "+ lname);
return (fname +" return "+ lname);
})("sridhar","kidambi with parameters"));