// get hamburger menu
// get horizontal menu
// get close btn
// get body tag
const hamburger = document.querySelector("#hamburger_menu");
const closeBtn = document.querySelector('#h-nav-close');
const hNav = document.querySelector(".h-nav");
const body = document.querySelector("body");

function showMenu(){
    body.classList.add('show-menu')
    console.log("clicked")
}
function hideMenu(){
    body.classList.remove('show-menu')
    console.log()
}
closeBtn.addEventListener('click' , hideMenu);
hamburger.addEventListener("click" , showMenu);
