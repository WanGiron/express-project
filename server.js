var express = require("express");
//var path = require("path");

var PORT = process.env.PORT || 8080;

var app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//SERVER : connection express
app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
});
