const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
let isOpen = false;

menu.addEventListener('click', toggleMenu);


function toggleMenu() {
    if(isOpen === false){
        menu.style.transform = "scale(1.2)"
        nav.style.display = "flex";
        isOpen = true;
    }else{
        menu.style.transform = "scale(1)"
        nav.style.display = "none";
        isOpen = false;
    }
}