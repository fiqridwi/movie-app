const searchReducer = (state = "", action) => {
  switch (action.type) {
    case "SEARCH_MOVIE":
      return { ...state, search: [action.payload, state.search] };
    default:
      return state;
  }
};

export default searchReducer;
