import { COMMENTS_IMG_HEIGHT, COMMENTS_IMG_WIDTH,ALERT_SHOW_TIME, submitButton } from './data.js';
import { closePreviewImg } from './img-uploader.js';

const tempContent = document.querySelector('#success').content.querySelector('.success');

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
  submitButton.textContent = 'Сохранить';
};

const onSuccessMessageEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

const onFreePlaceClick = (evt) => {
  if(evt.target.matches('.success')) {
    closeSuccessMessage();
  }
};

const showSuccessMessage = () => {
  tempContent.style.display = 'flex';
  const closeSuccessMessageButton = tempContent.querySelector('.success__button');
  document.body.insertAdjacentElement('beforeend', tempContent);

  closeSuccessMessageButton.addEventListener('click', () => {
    closeSuccessMessage();
  });

  document.addEventListener('click', onFreePlaceClick);
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
};

function closeSuccessMessage() {
  tempContent.style.display = 'none';
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
  document.removeEventListener('click', onFreePlaceClick);
}

const onSuccessSend = () => {
  closePreviewImg();
  unblockSubmitButton();
  showSuccessMessage();
};

export { getRandomInt, isRelevantLength, getRandomElement, createCommentItems, isEscapeKey, clearCommentsList, getErrorDialogBox, onSuccessSend, unblockSubmitButton, blockSubmitButton };
