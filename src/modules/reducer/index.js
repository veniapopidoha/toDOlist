const initialState = {
  data: [],
  currentID: 0,
  moreInfo: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TASK_INFO':
      return {
        ...state,
        tasks: state.data.push(action.payload),
      };
    case 'SET_CURRENT_ID':
      return {
        ...state,
        currentID: action.payload,
      };
    case 'SET_MORE_INFO':
      return {
        ...state,
        moreInfo: action.payload,
      };
    case 'EDIT_CHECKBOX':
      return {
        ...state,
        tasks: state.data[state.currentID]['status'] = action.payload,
      };
    default:
      return state;
  }
};
