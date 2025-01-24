var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var feedback = document.querySelector("#feedback");

var buttonSubmit = document.querySelector("#submit-answer");

function checkAnswer(){

    if (choice1.checked){
        var userAnswer = choice1.value;
        return userAnswer;
    }
    else if(choice2.checked){
        var userAnswer = choice2.value;
        return userAnswer;
    }
    else if (choice3.checked){
        var userAnswer = choice3.value;
        return userAnswer;
    }

    ;

}
function CorrectAnswer(answer){
    correctAnswer = "4";

    if (correctAnswer == answer){
        feedback.innerHTML = "Correct! Well done.";
    }
    else{
        feedback.innerHTML = "That's incorrect. Try again!";
    }
}

buttonSubmit.addEventListener("click",function(){
    var theAnswer = checkAnswer();

    CorrectAnswer(theAnswer);

})