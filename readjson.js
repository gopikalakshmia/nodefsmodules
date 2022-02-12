let fs=require("fs");
let customer=fs.readFileSync("customer.json");
// let customerstg=customer.toString();
// console.log(customerstg);
// console.log("id: "+customerstg.cid);
// let cusJson=JSON.parse(customerstg);
// console.log("id: "+cusJson.cid);

let cusJson=JSON.parse(customer);
console.log("id: "+cusJson.cid);
