const fetchRequestAction = ({
  initialValue,
  setValue,
  request,
  success,
  failure,
  api,
  transform,
}) => (dispatch) => {
  dispatch(initialValue);
  dispatch({
    type: request,
  });
  return api()
    .then(({ data }) => {
      dispatch({
        type: success,
      });
      dispatch(setValue(transform ? transform(data) : data));
    })
    .catch((error) => {
      dispatch({
        type: failure,
        error,
      });
    });
};

export default fetchRequestAction;
