    const showBtn = document.querySelector(".showButton1");
    const showBtn2 = document.querySelector(".showButton2");
    const projectD = document.querySelector(".projectDes1");
    const projectD2 = document.querySelector(".projectDes2");

    showBtn.addEventListener("click",()=>{
      showBtn.classList.toggle("active");
      projectD.classList.toggle("active");
      // projectD2.classList.toggle("active");
    })

    showBtn2.addEventListener("click",()=>{
      showBtn.classList.toggle("active");
      // projectD.classList.toggle("active");
      projectD2.classList.toggle("active");
    })

    // document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
    //   showBtn.classList.remove("active");
    //   projectD.classList.remove("active");
    // }))