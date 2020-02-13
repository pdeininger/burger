var express = require(express);
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout:  "main" }));
app.set("view engine", "handlebars");

//Import routes with server access
var routes = require();

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on:  http://localhost:" + PORT);
});