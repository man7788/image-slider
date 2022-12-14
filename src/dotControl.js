import findElement from './findElement';
import { showImage, hideImage } from './styleImage';

function clickDots() {
  const { dotList } = findElement();
  const { imageList } = findElement();

  for (let i = 0; i < dotList.length; i++) {
    dotList[i].addEventListener('click', () => {
      if (imageList[i].style.display !== 'none') {
        console.log(dotList);
      } else {
        showImage(imageList[i]);
        highlightDot(i);
        imageList.forEach((img) => {
          if (img.style.display !== 'none' && img !== imageList[i]) {
            hideImage(img);
          }
        });
      }
    });
  }
}

function highlightDot(n) {
  const { dotList } = findElement();

  dotList[n].classList.toggle('highlight');
  for (let i = 0; i < dotList.length; i++) {
    if (dotList[i] !== dotList[n]) {
      dotList[i].classList.remove('highlight');
    }
  }
}

export { clickDots, highlightDot };
