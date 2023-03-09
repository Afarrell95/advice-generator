function getFetch() {
  const url = `	https://api.adviceslip.com/advice`;
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);

      document.querySelector(
        "advice__number"
      ).innerHTML = `Advice #${data.slip.id}`;
      document.querySelector("advice__text").innerHTML = `${data.slip.advice}`;
    })

    .catch((err) => {
      console.log(`error ${err}`);
    });
}

getFetch();
