// nav animate //
/*Esse código é para animação do menu  */
const menuSection = document.querySelector('.navbar');

function menuScroll(){
    const windowTop = window.pageYOffset;
    if((windowTop)> menuSection.offsetHeight){
        menuSection.classList.add('roll');
    }
    else{
        menuSection.classList.remove('roll');
    }
    
}
 window.addEventListener('scroll',menuScroll);