let fs=require("fs");
let customer={cid:101,cname:"gopi",age:21};
fs.writeFile("customer.json",JSON.stringify(customer),{flag:"a+"} ,(err)=>{
    if(!err)
    console.log("data stored");
})