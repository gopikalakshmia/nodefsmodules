let fs=require("fs");//load module
let msg="welcome ";
// fs.writeFile("demo1.txt",msg,(err)=>{
//     if(!err)
//     console.log("data store successfully")})
fs.writeFile("demo1.txt",msg,{flag:"a+"},(err)=>{
    if(!err)
    console.log("data store successfully")})