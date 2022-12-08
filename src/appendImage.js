import assignImage from './importImage';
import findElement from './findElement';

function appendToSlides() {
  const div = findElement().slidesDiv;
  const { first } = assignImage();
  const { second } = assignImage();
  const { third } = assignImage();
  const { fourth } = assignImage();

  // div.append(first, second, third, fourth);
  div.append(first);
}

export default appendToSlides;
