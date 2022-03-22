import {photos} from './data.js';
import {createPictures} from './pictures.js';
import  {createPictureListeners} from './gallery.js';

createPictures(photos);
createPictureListeners();
