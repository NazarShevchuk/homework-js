let button = document.getElementById("finish");

button.addEventListener("click", checkTest);

function checkTest() {
  let result = 0;

  let a1 = document.getElementById("q1").value;

  if (a1 === "6") {
    result++;
  }
  let a2 = document.getElementById("q2").value;

  if (a2 === "10") {
    result++;
  }
  let a3 = document.getElementById("q3").value;

  if (a3 === "12") {
    result++;
  }
  let a4 = document.getElementById("q4").value;

  if (a4 === "16") {
    result++;
  }
  let a5 = document.getElementById("q5").value;

  if (a5 === "27") {
    result++;
  }

  alert("Количество правильных ответов: " + result);
}

checkTest();
