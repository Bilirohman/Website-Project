// HAMBURGER MENU
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.list ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});
