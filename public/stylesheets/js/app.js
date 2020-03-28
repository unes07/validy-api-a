const sidebarSlide = () => {
    const burger = document.querySelector(".burger-sidebar");
    const sidebar = document.querySelector(".sidebar");
    const contenu = document.querySelector(".contenu");
    const nav = document.querySelector(".nav-links");
    const container = document.querySelector(".container");
    const burgerM = document.querySelector(".burger");
    const navLinks = document.querySelectorAll(".nav-links li");
    const article = document.querySelector(".article");
  
    burger.addEventListener("click", () => {
      article.classList.toggle("article-active");
      function navB(){
          if(nav.classList.contains("nav-active")){
            nav.classList.toggle("nav-active");
            container.classList.toggle("container-act");
            sidebar.classList.toggle("sidebar-active");
            burgerM.classList.toggle("toggle");
            navLinks.forEach((link, index) => {
              if (link.style.animation) {
                link.style.animation = "";
              } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
                  0.5}s`;
              }
            });
          } else {
            sidebar.classList.toggle("sidebar-active");
          }
      }
      navB()
      contenu.classList.toggle('conten-active');
      burger.classList.toggle("toggle");
    });
  };
  
sidebarSlide();


const btnChap = document.querySelectorAll('.btnchap')

// btnChap.forEach(function(){
//   this.btnChap.addEventListener('click', function(){
//     console.log(url);
//   };
// });

btnChap.forEach((i, index) => {
  const dat = index;
  const articlePara = document.querySelector('.articlepara') ;
  const sectionText = document.querySelector('.section') ;
  i.addEventListener('click', event => {
  const url = rightUrl;
    axios.get(url)
      .then(function(res){
        // console.log(res.data.chapitres[dat]);
        sectionText.innerText = res.data.chapitres[dat].chapitreName;
        articlePara.innerText = res.data.chapitres[dat].article;
        // res.data.courses[0].chapitres[dat].article;
      })
      .catch(function(err){
        console.log(err)
      })
  })
})

function url(){
  var url = window.location.href.split('3000');
  rightUrl = `${url[0]}3000/api${url[1]}`;
}
url();

function goBack() {
  window.history.back();
}

// a()
// for (i = 0; i < btnChap.length; i++) {
//   btnChap[i].addEventListener('click', function(){
//     console.log(url)
//     // axios.get(url)
//     // .then(function(res){
//     //   console.log(res)
//     // })
//   })
// }

// console.log(res.data[0].chapitres[0].chapitreName)
