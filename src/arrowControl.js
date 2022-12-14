import findElement from './findElement';
import {
  toggleSlideToLeft,
  toggleSlideToRight,
  slideCurrentLeft,
  slideCurrentRight,
  showNextSlide,
} from './styleImage';
import { highlightDot } from './dotControl';

function slideRight() {
  const list = findElement().imageList;
  let trigger = true;
  for (let i = 0; i < list.length; i++) {
    if (list[i].style.display !== 'none' && trigger) {
      if (list[i].previousSibling === null) {
        toggleSlideToRight(list[i]);
        slideCurrentRight(list[i], 300);
        showNextSlide(list[list.length - 1], 300);
        highlightDot(list.length - 1);
        trigger = false;
      } else {
        toggleSlideToRight(list[i]);
        slideCurrentRight(list[i], 300);
        showNextSlide(list[i].previousSibling, 300);
        highlightDot(i - 1);
        trigger = false;
      }
    }
  }
}

function slideLeft() {
  const list = findElement().imageList;
  let trigger = true;
  for (let i = 0; i < list.length; i++) {
    if (list[i].style.display !== 'none' && trigger) {
      if (list[i].nextSibling === null) {
        toggleSlideToLeft(list[i]);
        slideCurrentLeft(list[i], 300);
        showNextSlide(list[0], 300);
        highlightDot(0);
        trigger = false;
      } else {
        toggleSlideToLeft(list[i]);
        slideCurrentLeft(list[i], 300);
        showNextSlide(list[i].nextSibling, 300);
        highlightDot(i + 1);
        trigger = false;
      }
    }
  }
}

function clickArrowLeft() {
  const { arrowLeftDiv } = findElement();
  arrowLeftDiv.addEventListener('click', slideRight);
}

function clickArrowRight() {
  const { arrowRightDiv } = findElement();
  arrowRightDiv.addEventListener('click', slideLeft);
}

export { clickArrowLeft, clickArrowRight, slideRight };
