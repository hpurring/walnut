

// toggle the grid on/off
const activate = function() {

    var allSquares = document.querySelectorAll(".square");
    if (document.getElementById("twobytwo").disabled !== false) {
        allSquares.forEach(square => {
            square.disabled = false;
            square.style.cursor = "pointer";
        })
        changeColor();
        document.getElementById("start-btn").innerHTML = "PAUSE";
    } else {
        console.log("false");
        allSquares.forEach(square => {
            square.disabled = true;
            square.style.cursor = "default";
        })
        document.getElementById("start-btn").innerHTML = "START";
        freezeColor();
    } 
};

// add and remove squares
const adjustGrid = function() {
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

function changeColor() {
    let grid = document.querySelectorAll(".square"); 
    
    for (let i = 0; i < grid.length; i++) { 
        grid[i].addEventListener("mouseover", turnBlue);
        
        function turnBlue() {
            if (grid[i].style.backgroundColor === "royalblue") {
                grid[i].style.backgroundColor = "white";
            } else {
                grid[i].style.backgroundColor = "royalblue"
            }
        }
    }
}

// freeze entire grid
function freezeColor() {
    let grid = document.querySelectorAll(".square"); 

    for (let i = 0; i < grid.length; i++) { 
        
        grid[i].addEventListener("mouseover", () => {
            if (grid[i].style.backgroundColor === "royalblue") {
                grid[i].style.backgroundColor = "white";
            } else if (grid[i].style.backgroundColor === "white") {
                grid[i].style.backgroundColor = "royalblue";
            }
        })
    }
}

document.getElementById("pick-size").addEventListener("change", function () {
    adjustGrid();
});

document.getElementById("start-btn").addEventListener("click", function() {
    activate();
});


