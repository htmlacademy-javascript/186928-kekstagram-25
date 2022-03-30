import {COMMENTS_IMG_HEIGHT, COMMENTS_IMG_WIDTH } from './data.js';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0) {
    throw new Error('Ошибка ввода данных. Введите положительные числа.');
  }
  if(min > max) {
    [min, max] = [max, min]; //Разобрался сам, ознакомившись с деструктуризацией, в точности совпало с твоим решением, спасибо за совет ))
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isRelevantLength = (currentStroke, maxLength) => {
  if (maxLength < 1 || typeof currentStroke !== 'string') {
    throw new Error('Ошибка ввода данных. Введите строку.');
  }
  return currentStroke.length <= maxLength;
};

const getRandomElement = (elements) => elements[getRandomInt(0, elements.length - 1)];
const commentsList = document.querySelector('.social__comments');
const commentsFragment = document.createDocumentFragment();

const clearCommentsList = () => {
  commentsList.innerHTML = '';
};

const createCommentItems = (comments) => {
  if(!comments.length) {
    return null;
  }
  comments.forEach( ({avatar, name, message}) => {
    const commentItem = document.createElement('li');
    const commentItemImg = document.createElement('img');
    const commentItemText = document.createElement('p');

    commentItem.classList.add('social__comment');

    commentItemImg.classList.add('social__picture');
    commentItemImg.src = avatar;
    commentItemImg.alt = name;
    commentItemImg.width = COMMENTS_IMG_WIDTH;
    commentItemImg.height = COMMENTS_IMG_HEIGHT;

    commentItemText.classList.add('social__text');
    commentItemText.textContent = message;

    commentItem.appendChild(commentItemImg);
    commentItem.appendChild(commentItemText);

    commentsFragment.appendChild(commentItem);
  });
  commentsList.append(commentsFragment);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInt, isRelevantLength, getRandomElement, createCommentItems, isEscapeKey, clearCommentsList};
