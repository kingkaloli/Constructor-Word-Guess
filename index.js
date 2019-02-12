var word = require("./word.js");
var inquire = require("inquirer");

var lettterArray = "abcdefghijklmnopqrstuvwxyz";

var oceans = [
"Pacific Ocean",
"Atlantic Ocean",
"Indian Ocean",
"Southern Ocean",
"Arctic Ocean"

];

var randomIndex = Math.floor(math.random() * oceans.length);

var randomWord = oceans[randomIndex];

var computerWord = new word(randomWord);

var requireNewWord = false;
var incorrectLetters = [];
var correctLetters = [];

var guessesLeft = 10;

function theLogic() {
if(requireNewWord) {
var randomIndex = Math.floor(Math.random() * oceans.length)
var randomWord = oceans[randomIndex];

computerWord = new word(randomWord);
requireNewWord = false;

}

}




