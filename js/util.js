import { COMMENTS_IMG_HEIGHT, COMMENTS_IMG_WIDTH, ALERT_SHOW_TIME } from './data.js';
import { closePreviewImg } from './img-uploader.js';

const tempContentSuccess = document.querySelector('#success').content.querySelector('.success');
const tempContentError = document.querySelector('#error').content.querySelector('.error');
const submitButton = document.querySelector('.img-upload__submit');

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

const getNUniquePhotos = (numberOfUniquePhotos, photos) => {
  if(numberOfUniquePhotos > photos.length) {
    numberOfUniquePhotos = photos.length;
  }
  const uniquePhotos = [];
  while (uniquePhotos.length < numberOfUniquePhotos) {
    const randomValue = getRandomInt(0, photos.length - 1);
    if (!(uniquePhotos.includes(photos[randomValue]))) {
      uniquePhotos.push(photos[randomValue]);
    }
  }
  return uniquePhotos;
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

const getErrorDialogBox = (err) => {
  const dialogBox = document.createElement('div');
  dialogBox.style.zIndex = 100;
  dialogBox.style.width = '300px';
  dialogBox.style.height = '200px';
  dialogBox.style.position = 'absolute';
  dialogBox.style.left = 0;
  dialogBox.style.right = 0;
  dialogBox.style.top = 0;
  dialogBox.style.bottom = 0;
  dialogBox.style.margin = 'auto';
  dialogBox.style.transform = 'translate(-50%, -50%);';
  dialogBox.style.padding = '10px 3px';
  dialogBox.style.fontSize = '30px';
  dialogBox.style.lineHeight = '2';
  dialogBox.style.borderRadius = '12px';
  dialogBox.style.textAlign = 'center';
  dialogBox.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  dialogBox.style.color = 'red';
  dialogBox.textContent = err;

  document.body.append(dialogBox);

  setTimeout(() => {
    dialogBox.remove();
  }, ALERT_SHOW_TIME);
};


const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const onSuccessMessageEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

const onErrorMessageEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorMessage();
  }
};

const onFreePlaceClickSuccess = (evt) => {
  if(evt.target.matches('.success')) {
    closeSuccessMessage();
  }
};

const onFreePlaceClickError = (evt) => {
  if(evt.target.matches('.error')) {
    closeErrorMessage();
  }
};

const showSuccessMessage = () => {
  tempContentSuccess.style.display = 'flex';
  const closeSuccessMessageButton = tempContentSuccess.querySelector('.success__button');
  document.body.insertAdjacentElement('beforeend', tempContentSuccess);

  closeSuccessMessageButton.addEventListener('click', () => {
    closeSuccessMessage();
  });

  document.addEventListener('click', onFreePlaceClickSuccess);
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
};

const showErrorMessage = () => {
  tempContentError.style.display = 'flex';
  const closeErrorMessageButton = tempContentError.querySelector('.error__button');
  document.body.insertAdjacentElement('beforeend', tempContentError);

  closeErrorMessageButton.addEventListener('click', () => {
    closeErrorMessage();
  });

  document.addEventListener('click', onFreePlaceClickError);
  document.addEventListener('keydown', onErrorMessageEscKeydown);
};

function closeSuccessMessage() {
  tempContentSuccess.style.display = 'none';
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
  document.removeEventListener('click', onFreePlaceClickSuccess);
}

function closeErrorMessage() {
  tempContentError.style.display = 'none';
  document.removeEventListener('keydown', onErrorMessageEscKeydown);
  document.removeEventListener('click', onFreePlaceClickError);
}

const onSuccessSend = () => {
  closePreviewImg();
  unblockSubmitButton();
  showSuccessMessage();
};

const onSendError = () => {
  closePreviewImg();
  unblockSubmitButton();
  showErrorMessage();
};

let originalPhotos = null;

function setOriginalPhotos (photos){
  originalPhotos = photos.slice();
}

const getOriginalPhotos = () => originalPhotos;


const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};


export { getRandomInt, isRelevantLength, getRandomElement, createCommentItems, isEscapeKey, clearCommentsList, getErrorDialogBox, onSuccessSend, unblockSubmitButton, blockSubmitButton, onSendError, getNUniquePhotos, setOriginalPhotos, getOriginalPhotos, debounce };
