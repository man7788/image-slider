import findElement from './findElement';
import { showImage, hideImage } from './styleImage';

function clickDots() {
  const { dotList } = findElement();
  const { imageList } = findElement();
  const trigger = true;

  for (let i = 0; i < dotList.length; i++) {
    dotList[i].addEventListener('click', () => {
      if (imageList[i].style.display !== 'none') {
        console.log(imageList[i]);
        // trigger = false;
      }
    });
  }
}

export default clickDots;
