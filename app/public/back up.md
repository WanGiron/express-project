<!DOCTYPE html>
<html lang="en">

<head>
    <!-- jQuery file -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!-- reset css file -->
    <link rel="stylesheet" href="assets/css/reset.css">
    <!-- bootstrap link -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>
    <!-- css style file -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <title>survey</title>
</head>

<body>
    <h1>This is a test</h1>
    <form action="">
        <div>
            <p>name</p>
            <input type="text" id="name-input">
            <p>photo</p>
            <input id="photo-input" type="text" placeholder="URL only please">
        </div>
        <div>
            <div id="first-question-div">
                <p>1. how hot you like your pizza?</p>
                <select name="" class="questions" id="first-question">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div id="second-question-div">
                <p>1. how many slices can you eat?</p>
                <select name="" class="questions" id="second-question">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <div id="third-question-div">
                <p>1. how often do you eat pizza?</p>
                <select name="" class="questions" id="third-question">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <div id="fourth-question-div">
                <p>1. how often do you share your pizza?</p>
                <select name="" class="questions" id="fourth-question">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <div id="fifth-question-div">
                <p>1. how often do you eat pizza with friends?</p>
                <select name="" class="questions" id="fifth-question">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>



        </div>

        <button id="submit-data">submit</button>
        <br>
        <button id="post-it">post it</button>
    </form>
</body>

<script>
    var results;
    var friend;
    var total2 = [];
    var r;
    var x;

    //var scoreSumValue2;
    function myFriend() {
        $.ajax({
            url: "/api/friendList",
            method: "GET"
        })
            .then(function (results) {
                results = results;
                //console.log(results);
                //__________________________________________________//
                
                for (i = 0; i < results.length; i++) {

                    a = friend.answers;
                    b = results[i].answers;

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
                    //to push the results to each user in API and current friend
                    console.log("this is " + x);
                    var score1 = results[i].score;
                    score1.push(x);
                    //var testw = friend.score;
                    console.log("this is the test" + friend.answers);
                    // l.push(x);
                    
                    
                    //total2.push(x);
                    //console.log(x);
                    //console.log(total);
                    //test.score = x;
                    //console.log(total2);
                    //console.log(a);


                    
                    function scoreSum2() {
        var matchScore1 = results[i].score[0];
        function getSum(total, num) {
            return total + num;
        }
        var scoreSumValue2 = matchScore1.reduce(getSum);
        console.log(scoreSumValue2);
        r = results[i].number;
        r.push(scoreSumValue2);
    }
    scoreSum2();

                    console.log(results);
                }
 

            })


    }

    

    //to post user in API
    $("#submit-data").on("click", function (event) {
        event.preventDefault();
        //var friend = $("#name-input").val().trim();
        var value1 = $("#first-question").val().trim();
        var value2 = $("#second-question").val().trim();
        var value3 = $("#third-question").val().trim();
        var value4 = $("#fourth-question").val().trim();
        var value5 = $("#fifth-question").val().trim();
         friend1 = {
            name: $("#name-input").val().trim(),
            photo: $("#photo-input").val().trim(),
            answers: [Number(value1), Number(value2), Number(value3), Number(value4), Number(value5)],
            score: [],
            number: []
        }
        
        friend = friend1;
        myFriend();
       
       
    })
    
    $("#post-it").on("click", function (event) {
        postIt();
        getTotalScore1();
        console.log(results); 
       
    })

    function postIt() {
        $.post("/api/friendList", friend,
            // function (data) {
            //     $("#name-input").val("");
            //     $("#photo-input").val("");
            //     $("#first-question").val("");
            //     $("#second-question").val("");
            //     $("#third-question").val("");
            //}
            )
    }


    //function to sum values in  friend array
    function getTotalScore1() {
        var myScore = friend.answers;
        function getSum(total, num) {
            return total + num;
        }
        var scoreSumValue = myScore.reduce(getSum);
        console.log(scoreSumValue);

    }


</script>

</html>