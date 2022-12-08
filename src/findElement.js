function findElement() {
  const slidesDiv = document.querySelector('.slides');
  const arrowLeftDiv = document.querySelector('.arrow-left');
  const arrowRightDiv = document.querySelector('.arrow-right');
  const imagesList = document.querySelectorAll('.slides img');

  return { slidesDiv, arrowLeftDiv, arrowRightDiv, imagesList };
}

export default findElement;
