const input = document.querySelectorAll("button");
const output = document.querySelector("input");

let sum = "";

input.forEach((button) => {
  button.addEventListener("click", () => {
    let inputValue = button.innerText;
    // let outputNo = output.value;
    if (inputValue == "AC") {
      sum = "";
      output.value = sum;
    } else if (inputValue == "DC") {
      sum = sum.substring(0, sum.length - 1);
      output.value = sum;
    } else if (inputValue == "=") {
      sum = eval(sum);
      sum = sum.toString();
      output.value = sum;
    } else {
      sum = sum + inputValue;
      output.value = sum;
    }
    // console.log(inputValue)
  });
});

  