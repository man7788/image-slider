import './style.css';
import { appendToSlides, appendToBottom } from './appendImage';
import { defaultImage } from './styleImage';
import { clickArrowLeft, clickArrowRight } from './arrowControl';
import { clickDots } from './dotControl';
import showImageTimeout from './imageTimeout';

appendToSlides();
appendToBottom();
defaultImage();
clickArrowLeft();
clickArrowRight();
clickDots();
showImageTimeout();
