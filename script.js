const choices = document.querySelectorAll(".choice");

choices.forEach(function(choice) {
  choice.addEventListener("click", function() {
    choices.forEach(function(choice) {
      choice.classList.remove("selected");
    });

    this.classList.add("selected");
  });
});

// Active state of submit button
// go to thank_you.html
function activeSubmit(obj) {
  obj.style.backgroundColor = "white";
  obj.style.color = "hsl(25, 97%, 53%)";
  window.location.href = "./thank_you.html";
};
