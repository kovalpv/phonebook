export const requestDefaultState = {
  fetch: false,
  error: null,
};

export const requestReducer = (
  { request, success, failure },
  defaultState = requestDefaultState,
) => (state = defaultState, action) => {
  switch (action.type) {
    case request:
      return {
        ...state,
        fetch: true,
        error: null,
      };
    case success:
      return {
        ...state,
        fetch: false,
        error: null,
      };
    case failure:
      return {
        ...state,
        fetch: false,
        error: action.error,
      };
    default:
      return state;
  }
};
