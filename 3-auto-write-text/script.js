let index = 0;
const h1 = document.querySelector("h1"),
  text = `So how you like that???`;

function writeText() {
  h1.innerText = text.slice(0, index);
  index++;
  index > text.length ? (index = 0) : null;
}

setInterval(writeText, 100);
