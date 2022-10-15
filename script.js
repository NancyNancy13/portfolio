"use strict";

const icon = document.querySelector("#icon");
const icon1 = document.querySelector("#a");
const icon2 = document.querySelector("#b");
const icon3 = document.querySelector("#c");
const nav = document.querySelector("#nav");
const blue = document.querySelector("#blue");

icon.addEventListener("click", burgerMenu);
function burgerMenu() {
  console.log("click");
  icon1.classList.toggle("a");
  icon2.classList.toggle("c");
  icon3.classList.toggle("b");
  nav.classList.toggle("show");
  blue.classList.toggle("slide");
}

import { animate, stagger, scroll } from "https://cdn.skypack.dev/motion";
const text = document.querySelectorAll(".headerText");
const hr = document.querySelector("hr");

animate(text, { translateY: 400 }, { duration: 2, delay: stagger(0.2), direction: "alternate", repeat: Infinity });
animate(hr, { translateX: 400 }, { duration: 2, delay: stagger(0.2), direction: "alternate", repeat: Infinity });
