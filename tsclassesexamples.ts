class samplec {

     fullname:string="";
    constructor(public name,public state,public city){
            this.fullname=name+"-"+state+"-"+city;
    }
}

var objsamplec=new samplec("A","B","C");
console.log(objsamplec.fullname);
