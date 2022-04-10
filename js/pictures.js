
const createPictures = (photos) => {
  const picturesBlock = document.querySelector('.pictures');
  if(picturesBlock.querySelectorAll('.picture__img')) {
    const pictures = picturesBlock.querySelectorAll('.picture');
    pictures.forEach((elem)=>{
      picturesBlock.removeChild(elem);
    });
  }
  const tempContent = document.querySelector('#picture').content.querySelector('.picture');
  const avatarsFragment = document.createDocumentFragment();
  photos.slice().forEach( ({url, likes, comments, id}) => {
    const avatar = tempContent.cloneNode(true);
    avatar.querySelector('.picture__img').src = url;
    avatar.querySelector('.picture__likes').textContent = likes;
    avatar.querySelector('.picture__comments').textContent = comments.length;
    avatar.setAttribute('data-id', `${id}`);

    avatarsFragment.appendChild(avatar);
  });

  //отрисовка аватаров в блоке .pictures
  picturesBlock.appendChild(avatarsFragment);
};

export {createPictures};

