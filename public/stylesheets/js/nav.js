const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const container = document.querySelector(".container");
    const navLinks = document.querySelectorAll(".nav-links li");
    const sidebar = document.querySelector('.sidebar');
    const contenu = document.querySelector('.contenu');
    const burgerSide = document.querySelector(".burger-sidebar");
  
    burger.addEventListener("click", () => {
      function side(){
        if((sidebar.classList.contains("sidebar-active")) && (contenu.classList.contains("conten-active"))){
          sidebar.classList.toggle('sidebar-active');
          contenu.classList.toggle('conten-active');
          burgerSide.classList.toggle("toggle");
          nav.classList.toggle("nav-active");
          container.classList.toggle("container-act");
        } else {
          nav.classList.toggle("nav-active");
          container.classList.toggle("container-act");

        }
      }
      side();
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
  
  navSlide();
  