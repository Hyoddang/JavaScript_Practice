const clockTitle = document.querySelector(".js-clock");

function updateTime() {
  const date = new Date();
  const christmasEve = new Date(date.getFullYear(), 11, 24);

  const xmasEve = christmasEve - date;

  const day = Math.floor(xmasEve / (1000 * 60 * 60 * 24));
  const hour = Math.floor(xmasEve % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)).toString().padStart(2, "0");
  const minutes = Math.floor(xmasEve % (1000 * 60 * 60) / (1000 * 60)).toString().padStart(2, "0");
  const seconds = Math.floor(xmasEve % (1000 * 60) / 1000).toString().padStart(2, "0");

  clockTitle.innerHTML = `${day}d ${hour}h ${minutes}m ${seconds}s`;
}

updateTime();
setInterval(updateTime, 1000);