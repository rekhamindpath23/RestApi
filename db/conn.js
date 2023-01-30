const mongoose=require("mongoose");
 
mongoose.set("strictQuery",true);
mongoose.connect("mongodb://localhost:27017/olymics",{
    useNewUrlParser:true
}).then(()=>
{
    console.log("database connected successfully");
})
.catch((err)=>
{
console.log("database not connected ");
})