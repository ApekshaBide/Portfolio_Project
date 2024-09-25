let menuIcon = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

navIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');


window.onscroll = () => {
sections.forEach(sec=>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id=sec.getAttribute('id');
    if(top >= offset && top < offset + height){
navLinks.forEach(links =>{
    links.classList.remove('active');
    document.querySelector('header nav a[href*='+ id +']').classList.add('active');
});
    };
});


let header = document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY > 100);
menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
let darkModeIcon = document.querySelector('#darkmoon-icon');
darkModeIcon.onclick = () =>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};
const darkModeToggle = document.getElementById('darkmoon-icon');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});



ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });
 ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img img,.service-container,portfolio-box,.contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1,.about-img img', { origin: 'left' });
 ScrollReveal().reveal('.home-content h3,.home-content p,about-content', { origin: 'right' });
// Dark Mode Toggle
// document.getElementById('darkmoon-icon').addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
// });

// // Sticky Header and Navbar Active Link
// window.addEventListener('scroll', () => {
//     const header = document.querySelector('.header');
//     header.classList.toggle('sticky', window.scrollY > 0);

//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('.navbar a');

//     sections.forEach(sec => {
//         const top = window.scrollY;
//         const offset = sec.offsetTop - 150;
//         const height = sec.offsetHeight;
//         const id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//                 document.querySelector(`.navbar a[href*=${id}]`).classList.add('active');
//             });
//         }
//     });
// });






