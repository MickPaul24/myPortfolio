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