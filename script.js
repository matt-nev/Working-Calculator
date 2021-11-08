let values = document.querySelectorAll(".button");
let screen = document.querySelector(".output");

for (var i = 0; i < values.length; i++) {
  values[i].addEventListener("click", function () {
    switch (
      this.innerText
    ) {
      case "C":
        output.innerText = "";
        break;

      case "x":
        if (input.innerText) {
          output.innerText = output.innerText.slice(0, -1);
        }
        break;

      case "%":
        output.innerText = eval(output.innerText) / 100;
        break;

      case "=":
        try {
          output.innerText = eval(output.innerText);
        } catch {
          output.innerText = "Error";
        }
        break;

      default:
        output.innerText += this.innerText;
    }
  });
}