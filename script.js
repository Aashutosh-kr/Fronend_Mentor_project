// for sliding of nav bar in small screen devices

const menubtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menubtn.addEventListener('click', () => {
    if (nav.id != 'nav-shown') {
        nav.id = 'nav-shown';
        menubtn.style.backgroundImage = 'url(../assets/shared/icon-close.svg)';
    } else {
        nav.id = 'nav-hidden';
        menubtn.style.backgroundImage = 'url(../assets/shared/icon-hamburger.svg)';
    }
})