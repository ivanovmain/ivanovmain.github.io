(function (){

    const burger = document.querySelector('.burger');
    const list = document.querySelector('.nav-adalin__list');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        list.classList.toggle('menu_active');
    });

}());