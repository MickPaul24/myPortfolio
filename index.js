    const showBtn = document.querySelector(".showButton");
    const projectD = document.querySelector(".projectDes");

    showBtn.addEventListener("click",()=>{
      showBtn.classList.toggle("active");
      projectD.classList.toggle("active");
    })

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
      showBtn.classList.remove("active");
      projectD.classList.remove("active");
    }))