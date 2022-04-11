import { getNUniquePhotos, getOriginalPhotos, debounce } from './util.js';
import { RANDOM_PHOTOS_NUMBER, RERENDER_DELAY } from './data.js';

const filtersBlock = document.querySelector('.img-filters');
const filtersButtons = filtersBlock.querySelectorAll('.img-filters__button');

const getFilter = (cb) => { // функция задержки на промежуток времени RERENDER_DELAY
  const getDelay = debounce(cb, RERENDER_DELAY);
  filtersBlock.classList.remove('img-filters--inactive');

  filtersBlock.addEventListener('click', (evt) => {
    let filteredPhotos;
    filtersButtons.forEach((elem) => elem.classList.remove('img-filters__button--active'));

    if(evt.target.closest('#filter-default')){
      filteredPhotos = getOriginalPhotos().slice();
      evt.target.classList.add('img-filters__button--active');
    }

    if(evt.target.closest('#filter-random')){
      const randomPhotos = getNUniquePhotos(RANDOM_PHOTOS_NUMBER, getOriginalPhotos().slice());
      filteredPhotos = randomPhotos;
      evt.target.classList.add('img-filters__button--active');
    }

    if(evt.target.closest('#filter-discussed')){
      filteredPhotos = getOriginalPhotos().slice().sort((a, b)=> b.comments.length - a.comments.length);
      evt.target.classList.add('img-filters__button--active');
    }

    getDelay(filteredPhotos);
  });
};

export { getFilter };
