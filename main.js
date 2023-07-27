const menu = document.querySelector("#menu");
const side_bar = document.querySelector(".side_bar");

//Hide and show side bar in layout
menu.addEventListener("click", function () {
  side_bar.classList.toggle("hide-side-bar");
});

//Hide and show side bar in repsonsive layout
menu.addEventListener("click", function () {
  side_bar.classList.toggle("show-side_bar");
});
