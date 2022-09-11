

const activate = function() {

    var allSquares = document.querySelectorAll(".square");
    if (document.getElementById("threebythree").disabled === true) {
        allSquares.forEach(square => {
            square.disabled = false;
        })
        document.getElementById("start-btn").innerHTML = "Pause";
    } else {
        allSquares.forEach(square => {
            square.disabled = true;
            document.getElementById("start-btn").innerHTML = "Start";
        })

    } 

    // for (var i = 0; i < allSquares.length; i++) {
    //     square.disabled = false;
    // }
};


const adjustGrid = function() {
    console.log("adjustGrid");
    var allSquares = document.querySelectorAll(".square");
    var fivebyfive = document.querySelectorAll("#fivebyfive");
    var fourbyfour = document.querySelectorAll("#fourbyfour");
    var threebythree = document.querySelectorAll("#threebythree");
    var twobytwo = document.querySelectorAll("#twobytwo");


    if (document.getElementById("pick-size").selected.value === "5 x 5") {
        allSquares.forEach(square => {
            square.display = block;
        })
    } else if (document.getElementById("pick-size").selected.value === "4 x 4") {
        console.log('fourbyfour');
        fivebyfive.forEach(square => {
            square.display = none;
        })
        fourbyfour.forEach(square => {
            square.display = block;
        })
        threebythree.forEach(square => {
            square.display = block;
        })
        twobytwo.forEach(square => {
            square.display = block;
        })
    }
}

document.getElementById("pick-size").addEventListener("change", function () {
    adjustGrid();
});

document.getElementById("start-btn").addEventListener("click", function() {
    activate();
});