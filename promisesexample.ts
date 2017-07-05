"use strict"

let performupload= function(imagestatus:string): Promise<{imagestatus:string,name:number}>{

return new Promise((resolved,rejected)=>{
    console.log(`Status: ${imagestatus}`)
    rejected({ imagestatus:"a",name:5} );
    // setTimeout(() =>{
    //     imagestatus= imagestatus+"success";
    //     resolved({imagestatus:imagestatus});
    // }, 1000);
    //  setTimeout(() =>{
    //     resolve({imagestatus:imagestatus+"error"});
    // }, 1000);
});

}

var upload,compress,transfer;

performupload('uploading')
.then((res)=>{
    upload=res;
    console.log(res);
    return performupload('compressing');
}).then((res)=>{
    compress=res;
     console.log(res);
    return performupload('transfer');
}).then((res)=>{
    upload=res;
     console.log(res);
    throw Error;
    // return performupload('done');
}).catch((res)=>{
    console.log("errror");
     performupload('done');
})