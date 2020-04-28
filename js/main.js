document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        window.scroll({
            behavior: window.innerWidth > 620 ? 'smooth' : 'auto',
            left: 0,
            top: document.querySelector(this.getAttribute('href')).offsetTop - 63
        });
    });
});

document.querySelector('.hamburger').addEventListener('click', function (){
    document.querySelector('.hamburger').classList.toggle('is-active')
})

document.querySelectorAll('.header__link').forEach(function (headerLink){
    headerLink.addEventListener('click', function (){
        document.querySelector('.hamburger').classList.remove('is-active')
    })
})

