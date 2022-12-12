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
  const circle1 = new Image();
  const circle2 = new Image();
  const circle3 = new Image();
  const circle4 = new Image();

  first.src = One;
  second.src = Two;
  third.src = Three;
  fourth.src = Four;
  right.src = Right;
  left.src = Left;
  circle1.src = Circle;
  circle2.src = Circle;
  circle3.src = Circle;
  circle4.src = Circle;

  return {
    first,
    second,
    third,
    fourth,
    right,
    left,
    circle1,
    circle2,
    circle3,
    circle4,
  };
}

export default assignImage;
