const sliderWrapper = document.getElementById('slider-wrapper');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let slideIndex = 0;

prev.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = sliderWrapper.children.length - 1;
  }
  updateSlider();
});

next.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex >= sliderWrapper.children.length) {
    slideIndex = 0;
  }
  updateSlider();
});

function updateSlider() {
  sliderWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
}
