const express = require("express")
const app = express();
let PORT = process.env.PORT || 2000
let path = require("path");
require("dotenv").config({path:".env"});
// # DATABASE_URI=mongodb+srv://cluster0.ymtzfu0.mongodb.net/" --apiVersion 1 --username canan"

const dbFunc = require("../db/conn");

// const bodyParser = require("body-parser")
// const hbs = require("handlebars");
// let PORT =   2000
// bodyParser
// app.set()
// console.log(path.join(__dirname,  "../template"))
let staticPath = path.join(__dirname, "../static")
// let handbarPath = path.join(__dirname,  "../template/partials")
// console.log(handbarPath)
let tempPath = path.join(__dirname, "../template/views");
// console.log(tempPath)
express.static(staticPath)
const fs = require("fs");
const contactModel = require("../models/Contact");


// hbs.registerPartial(`${__dirname}../template/partials`)
// app.use(express.static(statPath));
// app.use(express.static(tempPath));
// app.use(express.static(staticPath));

app.use("/static", express.static(staticPath));
app.set("view engine", "html");
app.set("views", tempPath);
// app.use(express.json())
// app.use(express.urlencoded())
app.use(express.urlencoded({}))

// app.use(hbs.registerPartial(handbarPath))
// app.use(handbarPath)
// app.set(handbarPath)
// app.use(express.pa)
// app.use("/static", express.static(handbarPath));
// app.use("/static", express.static(staticPath));
// app.set("view engine", "html");

// app.set("views", "html", tempPath);

// app.use("views", tempPath);
// app.set("views", "html");
app.engine("html", function (path, option, cb) {
    fs.readFile(path, (err, data) => {
        if (err) {
            // cb(err);
            return err
        }
        // let htmlData = data.toString()
        let htmlData = data.toString()
        // let htmlData = data.toJSON()
        // cb(htmlData)
        cb(null, htmlData)
    })
})

// app.set("views", )
// app.use(express.static(tempPath));
// app.use()
// console.log(staticPath)

app.get("/", (req, res) => {
    res.status(200).render("index");
});
app.get("/about", (req, res) => {
    res.status(200).render('about')
});
app.get("/services", (req, res) => {
    res.status(200).render("services");

});
app.get("/contacts", (req, res) => {
    res.status(200).render("contact");

});
app.post("/contact", async (req, res) => {
    try {
        await contactModel.create(req.body)
        res.status(201).json({ msg: "Thank You for Contact form Us" })

    } catch (err) {
        console.log('ThE Err',err)

    }
});
app.get("/project", (req, res) => {
    res.status(200).render("project");

});
app.get("/reviews", (req, res) => {
    res.status(200).render("review");
});

// app.get("/*", (req, res) => {
// app.get("*", (req, res) => {
app.get("/error", (req, res) => {
    try {
        // res.status(404).send("Error")
        res.status(404).redirect('/')
        // res.status(404).render('404')

    } catch (error) {
        console.log('Th Err', error)
    }
})
dbFunc().then(() => {
    app.listen(PORT, () => {
        console.log('I am live to the port ' + PORT)
    });
});