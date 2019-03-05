
var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friendList", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friendList", function (req, res) {
        req.body.answers = req.body.answers.map(a => Number(a));
        friends.push(req.body);
      res.json(true);
    });
}