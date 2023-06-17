const header  = document.querySelector('.header');


window.addEventListener('scroll', () =>{
    let scrollTop = window.scrollY;

    if(scrollTop >= 500){
        header.style.backgroundColor = 'rgb(240, 240, 240)';
        header.style.transition = '0.6s all';
    } else {
        header.style.backgroundColor = '';
    }
});


const open = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menu = document.querySelector('.header');
const overplay = document.querySelector('.overplay');

open.addEventListener('click', () =>{
    menu.classList.add('active');
    overplay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () =>{
    menu.classList.remove('active');
    overplay.classList.remove('active');
    document.body.style.overflow = '';
});