import One from './image/pexels-johann-1254140.jpg';
import Two from './image/pexels-muhannad-alatawi-58997.jpg';
import Three from './image/pexels-pixabay-257540.jpg';
import Four from './image/pexels-svetozar-milashevich-1490908.jpg';

function assignImage() {
  const first = new Image();
  const second = new Image();
  const third = new Image();
  const fourth = new Image();

  first.src = One;
  second.src = Two;
  third.src = Three;
  fourth.src = Four;

  return { first, second, third, fourth };
}

export default assignImage;
