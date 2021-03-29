const burger = document.querySelector('.burger');
const menu = document.querySelector(".header-mobile");

burger.addEventListener('click', () => {
    menu.classList.toggle('header-mobile_active');
    burger.classList.toggle('burger_active');
});















    
    document.querySelector('.skills__stars-items-z').onclick = function onclickRadio() {
        let nameRadio = document.getElementsByName('photoshop-rating');
        for (var i = 0; i < nameRadio.length; i++) {
          if (nameRadio[i].type === 'radio' && nameRadio[i].checked) {
            valueRadio = nameRadio[i].value;       
          }
        }
        localStorage.setItem("myKey", JSON.stringify(valueRadio));
        
    
        
      }

      

      // document.querySelector('.skills__stars-items-z').addEventListener('click', () => {
      //   if (nameRadio[i].value >= 1) {
      //       document.querySelector('.skills__stars-items-z').checked;
      //        localStorage.getItem("myKey");
      //     }
      // });

