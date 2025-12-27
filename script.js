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





const form = document.querySelector('#contactForm');
const status = document.querySelector('#status');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // ← THIS kills the redirect

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.textContent = 'Message sent successfully';
      form.reset();
    } else {
      status.textContent = 'Something went wrong';
    }
  } catch (error) {
    status.textContent = 'Network error';
  }
});








