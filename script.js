var values = document.querySelectorAll(".button span");
var display = document.querySelector(".display");

for (var i = 0; i < values.length; i++) {
  values[i].addEventListener("click", function () {
    switch (
      this.innerText 
    ) {
      case "C":
        display
    .innerText = "";
        break;
      /*
      case "*":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;

      case "%":
        display
    .innerText = eval(display
        .innerText) / 100;
        break;
      */
      case "=":
        try {
          display
        .innerText = eval(display
        .innerText);
        } catch {
          display
        .innerText = "Error";
        }
        break;

      default:
        display
    .innerText += this.innerText;
    }
  });
}
