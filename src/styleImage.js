import findElement from './findElement';

function hideImage() {
  const images = findElement().imagesList;
  for (let i = 1; i < images.length; i++) {
    images[i].style.display = 'none';
  }
}

export default hideImage;
