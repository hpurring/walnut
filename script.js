

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
    var five = document.querySelectorAll("#fivebyfive");
    var four = document.querySelectorAll("#fourbyfour");
    var three = document.querySelectorAll("#threebythree");
    var two = document.querySelectorAll("#twobytwo");

    var option = document.getElementById("pick-size");
    var value = option.value;

    if (value === "5x5") {
        allSquares.forEach(square => {
            square.style.visibility = "visible";
        })
    } else if (value === "4x4") {
        for (let i = 0; i < five.length; i++) {
            five[i].style.visibility = "hidden";
        }
        four.forEach(square => {
            square.style.visibility = "visible";
        })
        three.forEach(square => {
            square.style.visibility = "visible";
        })
        two.forEach(square => {
            square.style.visibility = "visible";
        })
    } else if (value === "3x3") {
        for (let i = 0; i < five.length; i++) {
            five[i].style.visibility = "hidden";
        }
        for (let i = 0; i < four.length; i++) {
            four[i].style.visibility = "hidden";
        }
        three.forEach(square => {
            square.style.visibility = "visible";
        })
        two.forEach(square => {
            square.style.visibility = "visible";
        })
    } else if (value === "2x2") {
        for (let i = 0; i < five.length; i++) {
            five[i].style.visibility = "hidden";
        }
        for (let i = 0; i < four.length; i++) {
            four[i].style.visibility = "hidden";
        }
        for (let i = 0; i < three.length; i++) {
            three[i].style.visibility = "hidden";
        }
        two.forEach(square => {
            square.style.visibility = "visible";
        })
    }
}

document.getElementById("pick-size").addEventListener("change", function () {
    adjustGrid();
});

document.getElementById("start-btn").addEventListener("click", function() {
    activate();
});