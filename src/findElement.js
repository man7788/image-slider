function findElement() {
  const bottomDiv = document.querySelector('.bottom');
  const slidesDiv = document.querySelector('.slides');
  const arrowLeftDiv = document.querySelector('.arrow-left');
  const arrowRightDiv = document.querySelector('.arrow-right');
  const imageList = document.querySelectorAll('.slides img');
  const dotList = document.querySelectorAll('.bottom img');

  return {
    slidesDiv,
    arrowLeftDiv,
    arrowRightDiv,
    imageList,
    bottomDiv,
    dotList,
  };
}

export default findElement;
