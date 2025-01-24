var feedback = document.getElementById("feedback");
var buttonSubmit = document.querySelector("#submit-answer");

function checkAnswer() {
    // Retrieve the selected answer
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked'); // Select the checked radio button

    if (selectedAnswer) {
        return selectedAnswer.value; // Return the selected value
    } else {
        return null; // No option selected
    }
}

function CorrectAnswer(userAnswer) {
    const correctAnswer = "4"; // Define the correct answer

    // Compare user answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedback.innerHTML = "Correct! Well done.";
    } else {
        feedback.innerHTML = "That's incorrect. Try again!";
    }
}

buttonSubmit.addEventListener("click", function () {
    const userAnswer = checkAnswer();

    if (userAnswer) {
        CorrectAnswer(userAnswer); // Pass the user's answer to the function
    } else {
        feedback.innerHTML = "Please select an answer before submitting."; // Prompt to select an option
    }
});
