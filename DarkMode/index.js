const container = document.querySelector(".container");
const toggle = document.querySelector(".toggle");
const iconContainer = document.querySelector(".icon-container");


toggle.addEventListener("click", () => {
  container.classList.toggle("dark")
    ? (iconContainer.firstElementChild.className = "far fa-moon")
    : (iconContainer.firstElementChild.className = "far fa-sun");
});
