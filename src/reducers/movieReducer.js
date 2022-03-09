const initialState = {
  movie: [],
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIE":
      return {
        ...state,
        movie: [action.payload],
      };
    default:
      return state;
  }
};

export default movieReducer;
