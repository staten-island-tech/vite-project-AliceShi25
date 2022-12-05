import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import { stuff } from "./menu";
console.log(stuff);

document.querySelector("#theme").addEventListener("click", function () {
  if (document.body.classList.contains("pinkTheme")) {
    document.body.classList.add("defaultTheme");
    document.body.classList.remove("pinkTheme");
  } else {
    document.body.classList.add("pinkTheme");
    document.body.classList.remove("defaultTheme");
  }
});
