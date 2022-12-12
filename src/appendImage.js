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
  arrowLeftDiv.append(left);
  arrowRightDiv.append(right);
}

function appendToBottom() {
  const div = findElement().bottomDiv;
  const { circle1 } = assignImage();
  const { circle2 } = assignImage();
  const { circle3 } = assignImage();
  const { circle4 } = assignImage();

  div.append(circle1, circle2, circle3, circle4);
}

export { appendToSlides, appendToBottom };
