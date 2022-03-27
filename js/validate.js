import { TEXT_DESCRIPTION_MAX_LENGTH, HASHTAGS_MAX_NUMBER } from './data.js';

const validateForm = (form) => {
  const re = /^#[A-Za-zА-Яа-яёЁ0-9]{1,20}$/;

  const pristine = new Pristine(form, {
    classTo: 'img-upload__form',
    errorClass: 'img-upload__form--invalid',
    successClass: 'img-upload__form--valid',
    errorTextParent: 'img-upload__text',
    errorTextClass: 'img-upload__text-error',
    errorTextTag: 'div',
  });

  const hashtag = document.querySelector('.text__hashtags');
  const textDescription = document.querySelector('.text__description');

  const hashtagErrorMessage = 'Неверно заполнено поле';
  const textDescriptionErrorMessage = `Не более ${TEXT_DESCRIPTION_MAX_LENGTH} символов`;

  function isContainDuplicates(values) {
    return (new Set(values)).size !== values.length;
  }

  function isValidHashtag(value) {
    if (!value.length) {
      return true;
    }
    const hashtags = value.toLowerCase().split(' ');
    return hashtags.every( (element) => re.test(element) ) && hashtags.length <= HASHTAGS_MAX_NUMBER && !isContainDuplicates(hashtags);
  }

  function isValidtextDescription(value) {
    return value.length < TEXT_DESCRIPTION_MAX_LENGTH;
  }

  pristine.addValidator(hashtag, isValidHashtag, hashtagErrorMessage);
  pristine.addValidator(textDescription, isValidtextDescription, textDescriptionErrorMessage);

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if(pristine.validate()) {
      form.submit();
    }
  });
};

export { validateForm };
