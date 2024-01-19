document.querySelector("#submit").addEventListener("click", () => {
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let operator = document.querySelector("#selectOption").value;
  let result = document.querySelector(".result");

  switch (operator) {
    case "addition":
      result.innerHTML = Number(num1) + Number(num2);
      break;
    case "subtraction":
      result.innerHTML = Number(num1) - Number(num2);
      break;
    case "multiplication":
      result.innerHTML = Number(num1) * Number(num2);
      break;
    case "division":
      result.innerHTML = Number(num1) / Number(num2);
      break;
  }
});
