import One from './image/pexels-johann-1254140.jpg';
import Two from './image/pexels-muhannad-alatawi-58997.jpg';
import Three from './image/pexels-pixabay-257540.jpg';
import Four from './image/pexels-svetozar-milashevich-1490908.jpg';
import Right from './image/chevron-right.svg';
import Left from './image/chevron-left.svg';
import Circle from './image/circle-medium.svg';

function assignImage() {
  const first = new Image();
  const second = new Image();
  const third = new Image();
  const fourth = new Image();
  const left = new Image();
  const right = new Image();
  const circle = new Image();

  first.src = One;
  second.src = Two;
  third.src = Three;
  fourth.src = Four;
  right.src = Right;
  left.src = Left;
  circle.src = Circle;

  return { first, second, third, fourth, right, left, circle };
}

export default assignImage;
