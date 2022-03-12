const burgerButton = document.getElementsByClassName('burger-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

burgerButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
});



/*window.addEventListener('scroll', (event) => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
});*/



const accordion = document.getElementsByClassName('faq-row');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
