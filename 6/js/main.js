import {photos} from './data.js';
import {createPictures} from './pictures.js';
import './big-picture.js';
import {openPicture, closePicture} from './gallery.js';

createPictures(photos);

openPicture();
closePicture();

