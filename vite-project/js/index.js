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
  createBoxes: function (box) {
    DOMSelectors.parent.insertAdjacentHTML(
      "beforeend",
      `<div class="box">
          <h3>${box.name}</h3>
          <img class="image" src="${box.image}">
          <p class="info">${box.price}</p>
          </div>`
    );
  },
};

stuff.forEach(display.createBoxes);

const remove = {
  remove: function () {
    document.querySelectorAll(".box").forEach((card) => card.remove());
  },
};

const menu = {
  all: DOMSelectors.all.addEventListener("click", function () {
    remove.remove();
    stuff.forEach(display.createBoxes);
  }),
  cheap: DOMSelectors.cheap.addEventListener("click", function () {
    remove.remove();
    stuff.filter((c) => c.cheap.includes("yes")).forEach(display.createBoxes);
  }),
  popular: DOMSelectors.popular.addEventListener("click", function () {
    remove.remove();
    stuff.filter((p) => p.popular.includes("yes")).forEach(display.createBoxes);
  }),
  inStock: DOMSelectors.inStock.addEventListener("click", function () {
    remove.remove();
    stuff.filter((i) => i.inStock.includes("yes")).forEach(display.createBoxes);
  }),
};
