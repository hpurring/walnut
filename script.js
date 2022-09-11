

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

document.getElementById("start-btn").addEventListener("click", function() {
    activate();
});