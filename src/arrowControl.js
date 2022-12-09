import findElement from './findElement';
import { showImage, hideImage } from './styleImage';

function clickArrowLeft() {
  const { arrowLeftDiv } = findElement();
  const list = findElement().imagesList;

  arrowLeftDiv.addEventListener('click', () => {
    let trigger = true;
    list.forEach((img) => {
      if (img.style.display !== 'none' && trigger) {
        if (img.previousSibling === null) {
          showImage(list[list.length - 1]);
          hideImage(img);
          trigger = false;
        } else {
          showImage(img.previousSibling);
          hideImage(img);
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
        if (img.nextSibling === null) {
          showImage(list[0]);
          hideImage(img);
          trigger = false;
        } else {
          showImage(img.nextSibling);
          hideImage(img);
          trigger = false;
        }
      }
    });
  });
}

export { clickArrowLeft, clickArrowRight };
