import express from "express";


const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.render("index.ejs", { message: "abc1" })
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});