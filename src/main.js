import { toggleMenu, matchMedia } from './js/header';
import { refs } from './js/refs.js';
import { getTopBooks, getCategoryList } from './js/api';

import { sliderBook, supportListSlider } from './js/slider';
import {
  clickToCategory,
  handlerBookClick,
  handlerBookScroll,
} from './js/handlers';
// import { clickToCategory, handlerBookClick } from './js/handlers';

import { renderAllBooksInCategory } from './js/all-category-books';
import { getBooksForCategory } from './js/api';

refs.bookCategories.addEventListener('click', clickToCategory);
refs.sidebarCategories.addEventListener('click', clickToCategory);

getTopBooks();
getCategoryList();
supportListSlider();

refs.books.addEventListener('click', handlerBookClick);

window.addEventListener('scroll', handlerBookScroll);

refs.books.addEventListener('click', handlerBookClick);

// toggleMenu();
