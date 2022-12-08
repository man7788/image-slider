import assignImage from './importImage';
import findElement from './findElement';

function appendToSlides() {
  const div = findElement().slidesDiv;
  const { arrowLeftDiv } = findElement();
  const { arrowRightDiv } = findElement();
  const { first } = assignImage();
  const { second } = assignImage();
  const { third } = assignImage();
  const { fourth } = assignImage();
  const { right } = assignImage();
  const { left } = assignImage();

  div.append(first, second, third, fourth);
  // div.append(first);
  arrowLeftDiv.append(left);
  arrowRightDiv.append(right);
}

export default appendToSlides;
