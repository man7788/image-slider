import findElement from './findElement';
import {
  toggleSlideToLeft,
  toggleSlideToRight,
  slideCurrentLeft,
  slideCurrentRight,
  showNextSlide,
} from './styleImage';

function clickArrowLeft() {
  const { arrowLeftDiv } = findElement();
  const list = findElement().imagesList;

  arrowLeftDiv.addEventListener('click', () => {
    let trigger = true;
    list.forEach((img) => {
      if (img.style.display !== 'none' && trigger) {
        if (img.nextSibling === null) {
          toggleSlideToLeft(img);
          slideCurrentLeft(img, 300);
          showNextSlide(list[0], 300);
          trigger = false;
        } else {
          toggleSlideToLeft(img);
          slideCurrentLeft(img, 300);
          showNextSlide(img.nextSibling, 300);
          trigger = false;
        }
      }
    });
  });
}

function clickArrowRight() {
  const { arrowRightDiv } = findElement();
  const list = findElement().imagesList;

  arrowRightDiv.addEventListener('click', () => {
    let trigger = true;
    list.forEach((img) => {
      if (img.style.display !== 'none' && trigger) {
        if (img.previousSibling === null) {
          toggleSlideToRight(img);
          slideCurrentRight(img, 300);
          showNextSlide(list[list.length - 1], 300);
          trigger = false;
        } else {
          toggleSlideToRight(img);
          slideCurrentRight(img, 300);
          showNextSlide(img.previousSibling, 300);
          trigger = false;
        }
      }
    });
  });
}

export { clickArrowLeft, clickArrowRight };
