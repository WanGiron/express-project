
var friends = require("../data/friends");



module.exports = function (app) {
    app.get("/api/friendList", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friendList", function (req, res) {

        // To get numbers from answers //
        req.body.answers = req.body.answers.map(a => Number(a));

        var friend = req.body;
        var totals = [];
        var results = friends;
        var r;
        var x;
        var minValue;
        // Reseting scores to 0 //
        results.forEach(function (a) {
            a.score = [];
            a.number = [];
        })
        // Run a loop //
        for (var i = 0; i < results.length; i++) {
            // Assigning values to variables so we can use them in our math below //
            var a = friend.answers;
            var b = results[i].answers;

            // Getting absolute values from asnwer values from API and user input //
            var x = a.map(function (item, index) {
                if (item > b[index]) {
                    var y = item;
                }
                else {
                    y = b[index];
                }
                if (b[index] < item) {
                    var z = b[index];
                }
                else {
                    z = item;
                }
                return y - z;

            })

            // To push the total to a new element in our objects so we can compare them later //
            var score1 = results[i].score;
            console.log(results[i]);
            score1.push(...x);

            // Here we create function that calculate scores for the objects from API
            var matchScore1 = results[i].score;
            function getSum(total, num) {
                return total + num;
            }
            // To do sum to all number in score and get total to determine the min value later //
            var scoreSumValue2 = matchScore1.reduce(getSum);
            r = results[i].number;
            r.push(scoreSumValue2);
            totals.push(scoreSumValue2);

            // Get the the min number from array so we can generate our match //
            var minValue = Math.min(...r);
            // Getting the object from the array that matches our min number //
            var myMatch = results.filter(function (myMatch) {
                return myMatch.number == minValue;
            })

            //Appending data to modal//
            var matchFriend = {
                name: myMatch[0].name,
                photo: myMatch[0].photo
            }
        }

        // Pushing new friend to API //
        friends.push(friend);
        // Rendering our matching object //
        res.json(matchFriend);
    });

}

