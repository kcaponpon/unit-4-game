window.onload = function () {
    var currWordElem = document.getElementById("current-word");
    var winLossElem = document.getElementById("win-loss");
    var wrongWordsElem = documents.getElementById("wrong-guess");
    var words = ["cube", "circles", "pyramids", "triangles", "hexagon", "polygons", "c++"];
    var currentWord = words[Math.floor(Math.random() * words.length - 1)];
    var currentGuess = [];
    var wrongGuess = 6;
    var numGuess = 6;
    var wins = 0;
    var loses = 0;
    var updateWinLoss = function () {
        //  winLossElem.innerHTML =
        // <h1><strong>Wins: </strong> <span style='color: green'>${wings} </span></h1>
        // <h1><strong>Losses: </strong><span style='color: red'>${losses} </span></h1>
        // `;
        winsLosses
    }
