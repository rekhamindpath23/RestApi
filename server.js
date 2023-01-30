const express=require("express");
const app=express();

require("./db/conn");
const MensRanking=require("./models/mens")
const port=process.env.port||3000;


app.use(express.json());
//we are create post method for creating data
app.post("/mens",async(req,res)=>
{
    try
    {
        const createRecord=new MensRanking(req.body);
        console.log(req.body);
         const insertData= await createRecord.save();
        res.status(201).send(insertData);
    }
    catch(err)
    {
    res.status(400).send(err);
    }
})

//we are read data through get method
app.get("/mens",async(req,res)=>
{
    try
    {
        const readData=await MensRanking.find();
        res.send(readData);

    }
    catch(err)
    {
        res.status(400).send(err);
    }
})
//if you need to get only one data
app.get("/mens/:id",async(req,res)=>
{
    try
    {
        const _id=req.params.id;
        const readOneData= await MensRanking.findById({_id});
        res.send(readOneData);
    }
    catch(err)
    {
        res.status(400).send(err);

    }
})
//if you need to update data
/*app.patch("/mens/:id",async(req,res)=>
{
    try
    {
        const _id=req.params.id;
        const updateData=await MensRanking.findByIdAndUpadte(_id);
        res.send(updateData);

    }
    catch(err)
    {
        res.status(400).send(err);
    }


})

*/

//if u need to delete data
app.delete()
{

}

app.listen(port,()=>
{
    console.log(`server is running on port${port}`);
})