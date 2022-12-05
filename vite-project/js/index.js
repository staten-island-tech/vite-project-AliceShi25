import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import { stuff } from "./stuff";
// console.log(stuff);

document.querySelector("#theme").addEventListener("click", function () {
  if (document.body.classList.contains("pinkTheme")) {
    document.body.classList.add("defaultTheme");
    document.body.classList.remove("pinkTheme");
  } else {
    document.body.classList.add("pinkTheme");
    document.body.classList.remove("defaultTheme");
  }
});

const createBoxes = function () {
  stuff.forEach((stuff) =>
    document.querySelector(".parent").insertAdjacentHTML(
      "beforeend",
      `<div class="box">
        <h3>${stuff.name}</h3>
        <img class="image" src="${stuff.image}">
        <p class="info">${stuff.price}</p>
        </div>`
    )
  );
};
createBoxes();
