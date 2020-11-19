let index = 1;
const btn = document.querySelector("button"),
  ul = document.querySelector("ul");

function createNotification() {
  const notification = document.createElement("li");
  notification.textContent = `Check out this notification (${index})`;

  index++;
  ul.insertBefore(notification, ul.firstChild);
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

btn.addEventListener("click", () => {
  createNotification();
});
