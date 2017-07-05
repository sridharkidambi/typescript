class Post{
    @ProcessOne()
    @ProcessTwo()
    somefunction(){
        console.log("i have not called this function")
    }
}
function ProcessOne(){
    console.log("process one");
    return function(target,propertykey:string,descriptor:PropertyDescriptor){
        console.log("process one is called");
    }
}

function ProcessTwo(){
    console.log("process Two");
    return function(target,propertykey:string,descriptor:PropertyDescriptor){
        console.log("ProcessTwo is called");
    }
}

var post=new Post();
post.somefunction();

// class decorators
@detailedLog("billing")
@detailedLog("bing")
class AccountPayable{
    constructor(){}

    @admin
    deleteaccount(){
        console.log("delete account");
    }
}

function admin(target:object,propertykey:string,descriptor:TypedPropertyDescriptor<any>):any{
    console.log("doing admin");
    // throw Error;
    return descriptor;
}

function detailedLog(dashboard:string){
    switch(dashboard){
        case "billing":
        console.log("i am in billing")
        break;
         default:
        console.log("i am default")
        break;
    }
    if(dashboard=="billing")
    return function(target:object){};
    else
    return function(target:object){};
}

var accountPayable=new AccountPayable();
accountPayable.deleteaccount();