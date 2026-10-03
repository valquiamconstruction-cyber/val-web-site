const hamburgerBtn = document.querySelector(".hamburger-btn");
const navList = document.querySelector(".main-nav ul");

hamburgerBtn.addEventListener("click", function () {
  navList.classList.toggle("open");
});

// Close the menu if a click lands anywhere inside it (e.g. a link)
navList.addEventListener("click", function () {
  navList.classList.remove("open");
});

// Close the menu if a click lands anywhere outside the nav entirely
document.addEventListener("click", function (event) {
  const clickedInsideNav =
    navList.contains(event.target) || hamburgerBtn.contains(event.target);

  if (!clickedInsideNav) {
    navList.classList.remove("open");
  }
});
