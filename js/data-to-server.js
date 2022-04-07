const sendData = (src, formData, onSuccessSend, onError) => {
  fetch(
    src,
    {
      method: 'POST',
      body: formData,
    },
  )
    .then(() => onSuccessSend())
    .catch((err) => onError(err));
};

export { sendData };
