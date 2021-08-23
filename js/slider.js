const images = document.querySelectorAll('.slider__img');
const sliderLine = document.querySelector('.slider__line');
let count = 0;
let width;

const init = () => {
  width = document.querySelector('.slider__wrap').offsetWidth;
  sliderLine.style.width = `${width * images.length}px'`;
  images.forEach(item => item.style.width =  `${width}px`);
  rollSlider();
}

const rollSlider = () => {
  sliderLine.style.transform = `translate(-${count * width}px`;
}

init();

window.addEventListener('resize', init);

document.querySelector('.slider__arrow-next').addEventListener('click', () => {
  count++;
  if (count >= images.length) count = 0;
  rollSlider();
});

document.querySelector('.slider__arrow-prev').addEventListener('click', () => {
  count--;
  if (count < 0) count = images.length - 1;
  rollSlider();
});