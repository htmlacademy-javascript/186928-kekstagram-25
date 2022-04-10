import { loadPictures } from './data-from-server.js';
import { getErrorDialogBox, setOriginalPhotos } from './util.js';
import { dataSrc } from './data.js';
import { createPictures } from './pictures.js';
import { createPictureListeners } from './gallery.js';
import { createImgUploaderListeners } from './img-uploader.js';
import { validateForm } from './validate.js';
import { getFilter } from './filters.js';

loadPictures(
  dataSrc,
  (pictures) => {
    createPictures(pictures);
    setOriginalPhotos(pictures);
    getFilter(createPictures);
  },
  getErrorDialogBox
);

createPictureListeners();
createImgUploaderListeners();

const imgUploadForm = document.querySelector('.img-upload__form');
validateForm(imgUploadForm);
