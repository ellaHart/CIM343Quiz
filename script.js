
    let score = 0;

    function check(button) {
      if (button.classList.contains("correct")) {
        button.style.background = "green";
        score++;
      } else {
        button.style.background = "red";
      }

      // Function to update score display
function updateScore() {
    document.getElementById("score").textContent = `Score: ${score}`;
  }
    }

    // Function to update score display
function updateScore() {
    document.getElementById("score").textContent = `Score: ${score}`;
  }
