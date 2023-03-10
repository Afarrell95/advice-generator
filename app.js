function getFetch() {
  const url = `	https://api.adviceslip.com/advice`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.slip.id);
      console.log(data.slip.advice);

      document.querySelector(
        ".advice__number"
      ).innerHTML = `ADVICE #${data.slip.id}`;
      document.querySelector(
        ".advice__text"
      ).innerHTML = `"${data.slip.advice}"`;
    })

    .catch((err) => {
      console.log(`error ${err}`);
    });
}

getFetch();

function refreshPage() {
  window.location.reload();
}

let button = document.querySelector(".circle");

button.addEventListener("click", refreshPage);
