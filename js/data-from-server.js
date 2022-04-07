const loadPictures = (src, onSuccess, onError) =>
  fetch(src)
    .then((response) => {
      if(response.ok) {
        return response.json();
      }
      throw new Error (`${response.status} ${response.statusText}`);
    })
    .then( (pictures) => onSuccess(pictures) )
    .catch( (err) => onError(err) );

export { loadPictures };
