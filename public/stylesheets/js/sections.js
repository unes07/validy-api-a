const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      //Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
            0.5}s`;
        }
      });
      //Burger animation
      burger.classList.toggle("toggle");
    });
  };

const coll = document.getElementsByClassName("colla");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("acto");
    var allcourses = this.nextElementSibling;
    if (allcourses.style.maxHeight) {
        allcourses.style.maxHeight = null;
    } else {
      allcourses.style.maxHeight = allcourses.scrollHeight + "px";
    }
  });
}
  
  navSlide();
  