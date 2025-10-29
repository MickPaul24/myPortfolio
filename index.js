    const showBtn = document.querySelector(".showButton1");
    const showBtn2 = document.querySelector(".showButton2");
    const showBtn3 = document.querySelector(".showButton3");

    const projectD = document.querySelector(".projectDes1");
    const projectD2 = document.querySelector(".projectDes2");
    const projectD3 = document.querySelector(".projectDes3");

    showBtn.addEventListener("click",()=>{
      showBtn.classList.toggle("active");
      projectD.classList.toggle("active");
    })

    showBtn2.addEventListener("click",()=>{
      showBtn.classList.toggle("active");
      projectD2.classList.toggle("active");
    })

    showBtn3.addEventListener("click",()=>{
      showBtn.classList.toggle("active");
      projectD3.classList.toggle("active");
    })

    // document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
    //   showBtn.classList.remove("active");
    //   projectD.classList.remove("active");
    // }))





    //review navigation button js
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