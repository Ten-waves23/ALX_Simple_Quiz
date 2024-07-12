function checkAnswer() {

      let correctAnswer = '4';

      let useranswer = document.querySelector("input[name=quiz]:checked").value;

      if (useranswer === correctAnswer) {

      document.getElementById("feedback").textContent = "Correct! Well done.";
      }

      else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!.";
      }

}

document.getElementById("submit-answer").addEventListener("click", checkAnswer  ) ;