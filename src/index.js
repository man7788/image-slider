import './style.css';
import { appendToSlides, appendToBottom } from './appendImage';
import { defaultImage } from './styleImage';
import { clickArrowLeft, clickArrowRight } from './arrowControl';
import clickDots from './dotControl';

appendToSlides();
appendToBottom();
defaultImage();
clickArrowLeft();
clickArrowRight();
clickDots();
