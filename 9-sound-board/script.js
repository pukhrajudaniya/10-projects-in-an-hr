const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// function stopSongs() {
//   sounds.forEach((sound) => {
//     const song = document.querySelector(`audio[src*="${sound}"]`);

//     // song.pause();
//     song.currentTime = 0;
//   });
// }

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound.toUpperCase();

  btn.addEventListener("click", () => {
    const songList = document.querySelectorAll("audio");
    songList.forEach((song) => {
      song.pause();
      song.currentTime = 0;
    });
    document.querySelector(`audio[src*="${sound}"]`).play();
  });
  document.body.appendChild(btn);
});
