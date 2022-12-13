import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import { stuff } from "./stuff";
// console.log(stuff);

const DOMSelectors = {
  button: document.querySelector(".button"),
  theme: document.getElementById("theme"),
  all: document.getElementById("allButton"),
  cheap: document.getElementById("cheapButton"),
  popular: document.getElementById("popularButton"),
  inStock: document.getElementById("inStockButton"),
  parent: document.querySelector(".parent"),
  box: document.querySelector(".box"),
};

const remove = function () {
  document.querySelectorAll(".box").forEach((card) => card.remove());
};

const display = {
  changeTheme: DOMSelectors.theme.addEventListener("click", function () {
    if (document.body.classList.contains("pinkTheme")) {
      document.body.classList.add("defaultTheme");
      document.body.classList.remove("pinkTheme");
    } else {
      document.body.classList.add("pinkTheme");
      document.body.classList.remove("defaultTheme");
    }
  }),
  createBoxes: function () {
    stuff.forEach((stuff) =>
      DOMSelectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div class="box">
          <h3>${stuff.name}</h3>
          <img class="image" src="${stuff.image}">
          <p class="info">${stuff.price}</p>
          </div>`
      )
    );
  },
};
display.createBoxes();

const menu = {
  all: DOMSelectors.all.addEventListener("click", function () {
    remove();
    stuff.forEach(display.createBoxes);
  }),
  cheap: DOMSelectors.cheap.addEventListener("click", function () {
    remove();
    const cheap = stuff.filter((stuff) => stuff.cheap.includes(true));
    stuff.forEach(display.createBoxes);
  }),
  popular: DOMSelectors.popular.addEventListener("click", function () {}),
  inStock: DOMSelectors.inStock.addEventListener("click", function () {}),
};
