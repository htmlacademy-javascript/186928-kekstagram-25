import { photos } from './data.js';
import { createPictures } from './pictures.js';
import  { createPictureListeners } from './gallery.js';
import { createImgUploaderListeners } from './img-uploader.js';
import { validateForm } from './validate.js';

createPictures(photos);
createPictureListeners();

createImgUploaderListeners();

const imgUploadForm = document.querySelector('.img-upload__form');
validateForm(imgUploadForm);
