import findElement from './findElement';

function defaultImage() {
  const images = findElement().imageList;
  images[0].classList.add('current');
  for (let i = 1; i < images.length; i++) {
    images[i].style.display = 'none';
  }
}

function showImage(i) {
  const image = i;
  image.style.display = 'block';
}

function hideImage(i) {
  const image = i;
  image.style.display = 'none';
}

function toggleSlideToLeft(i) {
  const image = i;
  image.classList.toggle('slideToLeft');
}

function toggleSlideToRight(i) {
  const image = i;
  image.classList.toggle('slideToRight');
}

function toggleCurrent(i) {
  const image = i;
  image.classList.toggle('current');
}

function slideCurrentLeft(i, time) {
  setTimeout(() => {
    hideImage(i);
    toggleCurrent(i);
    toggleSlideToLeft(i);
  }, time);
}

function slideCurrentRight(i, time) {
  setTimeout(() => {
    hideImage(i);
    toggleCurrent(i);
    toggleSlideToRight(i);
  }, time);
}

function showNextSlide(i, time) {
  setTimeout(() => {
    showImage(i);
    toggleCurrent(i);
  }, time);
}

export {
  defaultImage,
  showImage,
  hideImage,
  toggleSlideToLeft,
  toggleSlideToRight,
  toggleCurrent,
  slideCurrentLeft,
  slideCurrentRight,
  showNextSlide,
};
