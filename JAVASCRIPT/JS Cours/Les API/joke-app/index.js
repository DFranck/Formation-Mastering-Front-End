// https://api.blablagues.net/?rub=blagues
const header = document.getElementById("header");
const content = document.getElementById("content");
let newJoke = document.querySelector("body");

const joke = () => {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((res) => {
      headerContent = res.data.content.text_head;
      responseContent =
        res.data.content.text !== ""
          ? res.data.content.text
          : res.data.content.text_hidden;
      //   console.log(res.data);
      header.textContent = headerContent;
      content.textContent = responseContent;
      //   console.log(`Question: ${headerContent}, Réponse: ${responseContent}`);
    });
};

joke();
newJoke.addEventListener("click", () => {
  joke();
});
