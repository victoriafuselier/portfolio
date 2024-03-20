console.log('your js file is linked properly');

const navButton = document.querySelector('.nav-button');
const navDiv = document.querySelector('.nav');
const pageContent = document.querySelector('.page-content'); 

navButton.addEventListener('click', () => {
    const isOpened = navButton.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        navButton.setAttribute('aria-expanded', 'true');
        pageContent.style.display ='none';
        navDiv.style.display ='block';
    } else {
        navButton.setAttribute('aria-expanded', 'false');
        navDiv.style.display = 'none';
        pageContent.style.display = 'block';       
    }
})





