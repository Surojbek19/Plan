console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1 Krish code
app.use(express.static("public")); // user lar u-n public folder ochiq degani
app.use(express.json()); // bu code .json foramtda kieib kelgan data ni Object holatga ozgartrib beradi
app.use(express.urlencoded({extended: true})); //It alllows our Express app to read data from HTML forms(Post request), and automatically coverst into JS.
//A Post request is a way for a client(like our browser or an app) to send data to a server. 

// 2 Session code

// 3 Views code (Backend da frontend ni yasash)

app.set("views", "views"); // Backend da frontend ni yasash u-n folder kerak boladi. bu yerda osha folderni nomini ko'rsatib o'tyabmiz
app.set("view engine", "ejs"); // bu yerda view engine "ejs" ekanligini ko'rsatdik

// 4 Routing code
app.post("/create-item", (req, res) => {
    console.log(req);
    res.json({test:"success"});
});

app.get("/", function(req, res) {
    res.render("harid");
})

const server = http.createServer(app); //"app" expressm varibale nomi
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});