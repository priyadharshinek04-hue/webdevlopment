let current = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

setInterval(nextSlide, 4000);