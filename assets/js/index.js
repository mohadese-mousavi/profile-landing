document.addEventListener('DOMContentLoaded',()=>{

    // sticky header
    window.addEventListener('scroll' , ()=>{
        const header = document.querySelector('#header');
        header.classList.toggle("sticky-header", window.scrollY > 0);
    })    

    // accordion in footer
    const accordion = document.getElementsByClassName('footer-content-box');
    for(i=0 ; i<accordion.length ; i++){
        accordion[i].addEventListener('click', function(){
            this.classList.toggle('active');
        })
    }

    // set and get dark-mode to localStorage
    const body = document.getElementsByTagName('body');
    const darkModeToggler = document.querySelector('#dark-mode-toggler');
    var headerLogo = document.getElementById("header-logo");

    var theme=localStorage.getItem("theme");
    if(theme==null)
    {
        localStorage.setItem("theme","light");
    }else{
        if (theme=="light") {
            body[0].classList.remove('dark-mode');
            headerLogo.srcset="./assets/img/logo1x.png";
            darkModeToggler.checked=false;
        }
        if (theme=="dark") {
            body[0].classList.add('dark-mode');
            headerLogo.srcset="./assets/img/logo-light1x.png";
            darkModeToggler.checked=true;
        }
    }
   
    darkModeToggler.addEventListener('change', function(){
        if (this.checked) {
            body[0].classList.add('dark-mode');
            headerLogo.srcset="./assets/img/logo-light1x.png";
            localStorage.setItem("theme","dark");
            
          } else {
            body[0].classList.remove('dark-mode');
            headerLogo.srcset="./assets/img/logo1x.png";
            localStorage.setItem("theme","light");
          }
    })


})