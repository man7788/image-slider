import { clickArrowRight } from './arrowControl';

function showImageTimeout() {
  const run = clickArrowRight().slideRight;
  setInterval(run, 5000);
}

export default showImageTimeout;
