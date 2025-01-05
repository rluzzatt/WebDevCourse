//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));


function checkPassword(req, res, next) {

    next();
}

app.use(checkPassword);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    console.log("get: " + req);

});

app.post("/check", (req, res) => {
    console.log(req.body);

    if(req.body.password == "xyz"){

        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.send("wrong password!");
    }
});










app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
