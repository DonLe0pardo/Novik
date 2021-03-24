const burger = document.querySelector('.burger');
const menu = document.querySelector(".header-mobile");

burger.addEventListener('click', () => {
    menu.classList.toggle('header-mobile_active');
    burger.classList.toggle('burger_active');
});





document.querySelector('.skills__stars-items').onclick = () => {
    let rating = document.querySelectorAll('.skills__stars-input');
    for (let i = 0; i < rating.length; i++) {
        if (rating[i].checked) {
            let result = rating[i].value;
            localStorage.setItem("myKey", JSON.stringify(result));
            break;
        }
    }
     localStorage.getItem("myKey");
      
  };
    
 