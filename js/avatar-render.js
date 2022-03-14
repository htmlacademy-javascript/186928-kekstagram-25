import {photos} from './create-photos.js';

// создаем новые DOM - элементы на основе шаблона "#picture" и временных данных
const tempContent = document.querySelector('#picture').content.querySelector('.picture');
const avatarsFragment = document.createDocumentFragment();

photos.forEach( ({url, likes, comments} ) => {
  const avatar = tempContent.cloneNode(true);

  avatar.querySelector('.picture__img').src = url;
  avatar.querySelector('.picture__likes').textContent = likes;
  avatar.querySelector('.picture__comments').textContent = comments.length;

  avatarsFragment.appendChild(avatar);
});

//отрисовка аватаров в блоке .pictures
const picturesBlock = document.querySelector('.pictures');
picturesBlock.appendChild(avatarsFragment);

