const burgerButton = document.getElementsByClassName('burger-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

burgerButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})


const gallerySlider = document.querySelector('.gallery-slider');
const galleryImages = document.querySelectorAll('.gallery-slider img');

const backBtn = document.querySelector('#backBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = galleryImages[0].clientWidth;

gallerySlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if(counter >= galleryImages.length -1) return;
    gallerySlider.style.transition = "transform 0.5s ease-in-out";
    counter++;
    gallerySlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
});

 backBtn.addEventListener('click', () => {
     if (counter <= 0) return;
    gallerySlider.style.transition = "transform 0.5s ease-in-out";
    counter--;
    gallerySlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
});

gallerySlider.addEventListener('transitionend', () => {
    if(galleryImages[counter].id === 'lastImg'){
        gallerySlider.style.transition = "none";
        counter = galleryImages.length - 2 ;
        gallerySlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(galleryImages[counter].id === 'firstImg'){
        gallerySlider.style.transition = "none";
        counter = galleryImages.length - counter;
        gallerySlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})