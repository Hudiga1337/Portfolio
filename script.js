//Header Toggle

let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
})

//Type Effect
let typed = new Typed('.auto-text',{
    strings:['Junior Front-End Developer!', 'Freelancer!', 'UI Designer!','Gamer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop:true,
})

$(document).ready(function(){ 
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    })
})


let navLinks = document.querySelectorAll('nav ul li a')

let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function(){
    const scrollPos = window.scrollY
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });
});
