const initialState = {
  movie: [],
};
const movieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIE_DETAIL":
      return {
        ...state,
        movie: [...state.movie, action.payload],
      };
    default:
      return state;
  }
};

export default movieDetailReducer;
