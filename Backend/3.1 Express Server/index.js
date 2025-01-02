import express from "express";

const app = express();
var port = 3001;


app.get("/",(req,res) =>
{
    res.send("Yooooooooooooo");
});

app.listen(port,() => 
{
    console.log(`hello from express on port ${port}`);
});