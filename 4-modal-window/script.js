const openBtn = document.querySelector(".open"),
  closeBtn = document.querySelector(".close"),
  container = document.querySelector(".modal-container");

openBtn.addEventListener("click", () => {
  container.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

console.log(open);
