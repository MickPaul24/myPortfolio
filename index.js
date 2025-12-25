//reviews navigation button js
const track = document.querySelector(".reviewcarousel-track");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;

function updateCarousel() {
  const itemWidth = items[0].clientWidth;
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});
//reviews navigation button js








//navbar hamburger menu navbar hamburger menu navbar hamburger menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click",()=>{
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    })

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }))