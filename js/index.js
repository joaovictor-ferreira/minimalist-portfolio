const navToggle = document.getElementById("toggle");
const menu = document.querySelector(".menu__ul");
const body = document.body;

navToggle.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "block";
    menu.style.transform = "translateX(0)";
  } else {
    menu.style.transform = "translateX(100%)";
    setTimeout(() => {
      menu.style.display = "none";
    }, 300); 
  }
});
