const btn = document.querySelector("button"),
  nav = document.querySelector("nav");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  nav.classList.toggle("active");
});

btn.addEventListener("transitionrun", () => {
  btn.textContent == "☰" ? (btn.textContent = "✖") : (btn.textContent = "☰");
});
