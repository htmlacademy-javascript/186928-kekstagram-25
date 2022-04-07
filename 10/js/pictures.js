let serverPhotos = [];

const createPictures = (photos) => {
  serverPhotos = photos;
  const tempContent = document.querySelector('#picture').content.querySelector('.picture');
  const avatarsFragment = document.createDocumentFragment();

  photos.forEach( ({url, likes, comments, id}) => {
    const avatar = tempContent.cloneNode(true);
    avatar.querySelector('.picture__img').src = url;
    avatar.querySelector('.picture__likes').textContent = likes;
    avatar.querySelector('.picture__comments').textContent = comments.length;
    avatar.setAttribute('data-id', `${id}`);

    avatarsFragment.appendChild(avatar);
  });

  //отрисовка аватаров в блоке .pictures
  const picturesBlock = document.querySelector('.pictures');
  picturesBlock.appendChild(avatarsFragment);
};

export {createPictures, serverPhotos};

