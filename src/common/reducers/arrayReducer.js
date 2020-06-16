export const arrayDefaultState = {
  data: [],
};

export const arrayReducer = ({ changed }, defaultState = arrayDefaultState) => (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case changed:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
