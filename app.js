console.log("Web Serverni boshlash");
const express = require("express");
const app = express();

const fs = require("fs");

// MongoDB chaqrish
const db = require("./server").db();
const mongodb = require("mongodb");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
});

// 1 Krish code
app.use(express.static("public")); // user lar u-n public folder ochiq degani (MIddleware DP)
app.use(express.json()); // (Middleware DP > rest API) bu code .json foramtda kieib kelgan data ni Object holatga ozgartrib beradi
app.use(express.urlencoded({extended: true})); //(Middleware DP > traditioal API) It alllows our Express app to read data from HTML forms(Post request), and automatically coverst into JS.
//A Post request is a way for a client(like our browser or an app) to send data to a server. 

// 2 Session code

// 3 Views code (Backend da frontend ni yasash)

app.set("views", "views"); // Backend da frontend ni yasash u-n folder kerak boladi. bu yerda osha folderni nomini ko'rsatib o'tyabmiz
app.set("view engine", "ejs"); // bu yerda view engine "ejs" ekanligini ko'rsatdik

// 4 Routing code
app.post("/create-item", (req, res) => {
    console.log(`user entered/create-item`)
    console.log("STEP2: frontend  > backend ga kirish")
    const new_reja = req.body.reja;

    console.log("STEP3: backend > database sorov jonatish")
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id; //Bizga kelayotgan "id" stringdan iborat
   db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data) {
    res.json({state: "success"})
   }
); 
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        {_id: new mongodb.ObjectId(data.id)},
        {$set: {reja: data.new_input}},
        function(err, data) {
            res.json({state: "success"})
        }
    )
});

app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({state: "all deleted"})
        })
    }
})


app.get("/author", (req, res) => {
    res.render("author", {user: user});
} )

app.get("/", function(req, res) {
    console.log(`user entered/`)
    console.log("STEP2: frontend  > backend ga kirish")

    console.log("STEP3: backend > database sorov jonatish")
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            consolelog(err);
            res.end("something went wrong");
        } else {
            console.log("STEP4: database > backend ga qaytish")

            console.log("STEP5: backend > frontend response")
            res.render("reja", { items: data })
        }
    })
})

module.exports = app