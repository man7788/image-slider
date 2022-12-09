import findElement from './findElement';

function defaultImage() {
  const images = findElement().imagesList;
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
export { defaultImage, showImage, hideImage };
