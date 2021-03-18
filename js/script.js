const burger = document.querySelector('.burger');
const menu = document.querySelector(".header-mobile");

burger.addEventListener('click', () => {
    menu.classList.toggle('header-mobile_active');
    burger.classList.toggle('burger_active');
});