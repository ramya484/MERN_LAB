const express=require('express')
const cors = require('cors');
const app=express()
app.use(cors());
const port=5000;
app.get('/',(req,res)=>{
    res.send("Hello from Server!");
});
app.listen(port,()=>{
    console.log(`Serever is running at port ${port}`)
})