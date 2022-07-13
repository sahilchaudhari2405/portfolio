/* ================================== typing animation==================================== */
// var typed = new Typed(".typing",{
//     Strings:['Web Designer','Competitive Programmer','Web Devloper'],
//     typeSpeed:100,
//     BackSpeed:60,
//     loop:true
// })
var typed2 = new Typed(".typing", {
  strings: ["Web Designer", "Web Devloper", "Competitive Programmer"],
  typeSpeed: 70,
  backSpeed: 60,
  smartBackspace: true,
  fadeOut: true,
  loop: true,
});
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;
(allSection = document.querySelectorAll(".section")),
  (totalSection = allSection.length);
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        // console.log("back-section"+navList[i].querySelector("a"))
        // allSection[j].classList.add("back-section");
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
// function addBackSection()
// {
//   for(let i=0;i<totalSection;i++)
//   {
//     allSection[i].classList.remove("back-section");
//   }
// }
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < totalSection; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionInd = this.getAttribute(".data-section-index");
  // console.log(sectionInd);
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionInd);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  asides = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  asides.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
