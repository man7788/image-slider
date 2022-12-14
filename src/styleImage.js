import findElement from './findElement';

function defaultImage() {
  const images = findElement().imageList;
  images[0].style.display = 'block';
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

function slideCurrentLeft(i, time) {
  setTimeout(() => {
    hideImage(i);
    toggleSlideToLeft(i);
  }, time);
}

function slideCurrentRight(i, time) {
  setTimeout(() => {
    hideImage(i);
    toggleSlideToRight(i);
  }, time);
}

function showNextSlide(i, time) {
  setTimeout(() => {
    showImage(i);
  }, time);
}

export {
  defaultImage,
  showImage,
  hideImage,
  toggleSlideToLeft,
  toggleSlideToRight,
  slideCurrentLeft,
  slideCurrentRight,
  showNextSlide,
};
