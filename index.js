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