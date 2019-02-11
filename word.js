var Letter = require("./letter.js");

function word (answer) {
this.objArry = [];

for (var i = 0; i < answer.length; i++) {
    var letter = new Letter(answer[i]);
    this.objArry.push(letter);
}
this.log = function() {

    var answerLog = "";
    for(var i = 0; i < this.objArray.length; i++) {
        answerlog += this.objArray[i] + "";
    }
    console.log(answerLog + "\n=====================\n");
}
this.userGuess = function (input) {
    for(var i = 0; i < this.objArray.length; i++) {
        this.objArray[i].guess(input);
    }
};
}
module.exports = word;