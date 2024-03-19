console.log('your js file is linked properly');

const menuButton = document.querySelector('.menu-button');
const homeNavButton = document.querySelector('#nav-home');
const homeDisplay = document.querySelector('.home');
const menuDisplay = document.querySelector('.menu');
const aboutNavButton = document.querySelector('#nav-about');
const aboutDisplay = document.querySelector('.about');
const aboutButton = document.querySelector('#home-about-button');
const contactNavButton = document.querySelector('#nav-contact');
const contactDisplay = document.querySelector('.contact');


menuButton.addEventListener('click', () => {
    const isOpened = menuButton.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        menuButton.setAttribute('aria-expanded', 'true');
        homeDisplay.style.display='none';
        menuDisplay.style.display='block';
    } else {
        menuButton.setAttribute('aria-expanded', 'false');
        homeDisplay.style.display='block';
        menuDisplay.style.display='none';
    }
})

homeNavButton.addEventListener('click', () => {
    menuDisplay.style.display = 'none';
    homeDisplay.style.display = 'block';
    menuButton.setAttribute('aria-expanded', 'false');
})

aboutNavButton.addEventListener('click', () => {
    menuDisplay.style.display = 'none';
    aboutDisplay.style.display = 'block';
})

aboutButton.addEventListener('click', () => {
    homeDisplay.style.display = 'none';
    aboutDisplay.style.display = 'block';
})

contactNavButton.addEventListener('click', () => {
    menuDisplay.style.display = 'none';
    contactDisplay.style.display = 'block';
    aboutDisplay.style.display = 'none';
    homeDisplay.style.display = 'none';
})




