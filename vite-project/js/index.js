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
  new: document.getElementById("newButton"),
  parent: document.querySelector(".parent"),
  box: document.querySelector(".box"),
};

const display = {
  changeTheme: DOMSelectors.theme.addEventListener("click", function () {
    if (document.body.classList.contains("pinkTheme")) {
      document.body.classList.add("defaultTheme");
      document.body.classList.remove("pinkTheme");
    } else if (document.body.classList.contains("greenTheme")) {
      document.body.classList.add("pinkTheme");
      document.body.classList.remove("greenTheme");
    } else {
      document.body.classList.add("greenTheme");
      document.body.classList.remove("pinkTheme");
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

const filter = {
  cheap: function () {
    stuff.filter((c) => c.cheap.includes("yes")).forEach(display.createBoxes);
  },
  popular: function () {
    stuff.filter((p) => p.popular.includes("yes")).forEach(display.createBoxes);
  },
  inStock: function () {
    stuff.filter((i) => i.inStock.includes("yes")).forEach(display.createBoxes);
  },
  new: function () {
    stuff.filter((n) => n.new.includes("yes")).forEach(display.createBoxes);
  },
};

DOMSelectors.all.addEventListener("click", function () {
  remove.remove();
  stuff.forEach(display.createBoxes);
});
DOMSelectors.cheap.addEventListener("click", function () {
  remove.remove();
  filter.cheap();
});
DOMSelectors.popular.addEventListener("click", function () {
  remove.remove();
  filter.popular();
});
DOMSelectors.inStock.addEventListener("click", function () {
  remove.remove();
  filter.inStock();
});
DOMSelectors.new.addEventListener("click", function () {
  remove.remove();
  filter.new();
});
