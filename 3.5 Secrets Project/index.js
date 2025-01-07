//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming



import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));
function password_checker(input) {
    return input === "ILoveProgramming";
};


app.post("/check", (req, res) => {
    var password = req.body["password"];
    if (password === "ILoveProgramming") {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect("/");
    }
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});