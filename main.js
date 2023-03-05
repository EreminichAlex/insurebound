const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#open-menu');


navBtn.onclick = () => {
    if (nav.classList.contains('menu-open')) {
        nav.classList.remove('menu-open');
    } else {
        nav.classList.add('menu-open');
    }

}