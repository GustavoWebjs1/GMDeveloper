document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggleMenu");
  const links = document.querySelector(".links");

  toggle.addEventListener("click", () => {
    links.classList.toggle("active");
  });
});
