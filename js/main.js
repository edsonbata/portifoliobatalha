const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav-close.svg";
    } else {
        navBtnImg.src = './img/icons/nav-open.svg';
    }
}

AOS.init();


var typed = new Typed(".auto-type",{
    strings : ["Desenvolvedor Web", "Front-End"],
    typeSpeed : 50,
    backSpeed : 50,
    loop :true
})