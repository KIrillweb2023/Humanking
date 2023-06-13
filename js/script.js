const header  = document.querySelector('.header');


window.addEventListener('scroll', () =>{
    let scrollTop = window.scrollY;
    console.log(scrollTop);

    if(scrollTop >= 500){
        header.style.backgroundColor = 'rgb(240, 240, 240)';
        header.style.transition = '0.6s all';
    } else {
        header.style.backgroundColor = '';
    }
});