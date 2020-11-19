const imgs = document.querySelector(".image-container"),
  img = document.querySelectorAll(".image-container img");
let index = 0;

function run() {
  index++;

  index > img.length - 1 ? (index = 0) : false;

  imgs.style.transform = `translateX(${-index * 100}vw)`;
}

setInterval(run, 2000);
