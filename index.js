/* const fruits = ["apple", "mango", "banana"];

const concatenatedFruit = fruits.join(" ");
console.log(concatenatedFruit);
 */
const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove active class from all links
    links.forEach((link) => {
      link.classList.remove("active");
    });

    // Add active class to the clicked link
    link.classList.add("active");
  });
});

let professions = ["Frontend Development", "Digital Marketing", "Email Marketing"];
let symbols = [
  "1",
  "0",
  "y",
  "x",
  "#",
  "-",
  "=",
  "0",
  "1",
  "$",
  "@",
  ":",
  ";",
  "{",
  "}",
  "[",
  "]",
  "|",
];
let professionIndex = 0;
let is_index = 0;
let body = document.querySelector(".portfolio");

let interval = setInterval(() => {
  let currentProfession = professions[professionIndex];
  if (is_index < currentProfession.length) {
    let text = currentProfession.slice(0, is_index + 1);
    if (is_index < currentProfession.length - 1) {
      text += symbols[Math.floor(Math.random() * symbols.length)];
    }
    body.textContent = text;
    is_index++;
  } else {
    professionIndex = (professionIndex + 1) % professions.length;
    is_index = 0;
  }
}, 150);
