const express = require('express');
const app = express();
const api = require("./api");
const bodyParser = require("body-parser");
const port = 3006;

//Configs
    // Static Path
    app.use(express.static(__dirname + '/public'));
    // EJS
    app.set("view engine", "ejs");
    // BodyParser
    app.use(bodyParser.urlencoded({extended : false}));
    app.use(bodyParser.json());
    
app.get('/', (req, res) => {
    res.render("home");
});
app.get("/cep" ,(req,res) => {
})
app.get("/cep/:cep", async (req, res) => {
    try {
        const {data} = await api.get(`${req.params.cep}/json/`);
        return res.render("cep", {data : data});
    } catch (error) {
        res.redirect("/");
    }
})
app.post("/var", (req, res) => {
    res.redirect("/cep/" + req.body.cep);
});
app.listen(port, () => console.log(`APP ON : localhost:${port} !`))