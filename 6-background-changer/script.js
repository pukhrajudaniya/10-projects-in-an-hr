const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  document.body.style.background = `center / cover no-repeat url(https://picsum.photos/1920/1080?random=${parseInt(Math.random() * Math.random() * 100)})`;
});
