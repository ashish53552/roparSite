const express = require('express');

const bodyParser = require('body-parser');

const ejs = require('ejs');

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("index",{pageTitle:"DMME",pageLoad:null});
});

app.get("/research", function(req, res) {
  res.render("research",{pageTitle:"Research",pageLoad:"bTech"});
});

app.get("/contactUs", function(req, res) {
  res.render("contactUs",{pageTitle:"Contacts",pageLoad:"contactUs"});
});

app.get("/bTech", function(req, res) {
  res.render("bTech",{pageTitle:"Btech Courses",pageLoad:"bTech"});

});
app.get("/phdCourses", function(req, res) {
  res.render("phdCourses",{pageTitle:"Ph.D. Courses" ,pageLoad:"phdCourses"});
});


app.listen(process.env.port||3000, function() {
  console.log("Server Started With port 3000");
});
