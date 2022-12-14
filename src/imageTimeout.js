import { slideRight } from './arrowControl';

function showImageTimeout() {
  setInterval(() => {
    slideRight();
  }, 5000);
}

export default showImageTimeout;
