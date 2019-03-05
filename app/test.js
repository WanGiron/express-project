var test = [
    {
        name : [4, 3, 4],
        score : []
        
    },

    {
        name : [2, 4, 5],
        score : []
    },

    {
        name : [3, 1, 1],
        score : []
    },
];

var test2 = [2, 3, 4];
var total = [];

for (var i = 0; i < test.length; i++) {

    var a = test2;
    var b = test[i].name;
    //console.log(b);
    // var e = test[2].name3;

    //var c = test[3].total;

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
    var score1 = test[i].score;
    total.push(x);
    score1.push(x);
    // console.log(x);
    console.log(total);
    //test.score = x;
    
    //console.log(test);
    
    
    
}



// if (total <= test.score){
//     var temp = test.score;
//     console.log(temp);
// }