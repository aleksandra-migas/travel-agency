const burgerButton = document.getElementsByClassName('burger-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

burgerButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
});

const images = document.querySelectorAll("img"); 

let i = 0;

setInterval(function(){ 

  images.forEach( (img, i) => {
    img.style.display = 'none';
  })

  if( i == images.length) {
    i = 0; 
  }
  
  images[i].style.display = 'block';
  
  i++;

}, 3000);