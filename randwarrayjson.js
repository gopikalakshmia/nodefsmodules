//randwarrayjson
let fs=require("fs");
let customers=JSON.parse(fs.readFileSync("customers.json"));
console.log(customers.length); 
customers.forEach(element => {
    console.log(element.cid+"  "+element.cname);
});
let cus1={cid:105,cname:"lolith",age:39};

let result=customers.find(c=>c.cid==cus1.cid);
if(result==undefined){
    customers.push(cus1);
    fs.writeFileSync("customers.json",JSON.stringify(customers));
    console.log("record stored");
}
else
console.log("id must be unique");

