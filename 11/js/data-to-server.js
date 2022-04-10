const sendData = (src, formData, onSuccessSend, onError) => {
  fetch(
    src,
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if(!response.ok) {
        throw new Error ('Ошибка соединения с сервером');
      }
      onSuccessSend();
    })
    .catch((err) => onError(err));
};

export { sendData };
