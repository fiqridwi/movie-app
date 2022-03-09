export const searchMovie = (payload) => {
  return {
    type: "SEARCH_MOVIE",
    payload,
  };
};

export const setMovie = (payload) => {
  return {
    type: "SET_MOVIE",
    payload,
  };
};

export const setMovieDetail = (payload) => {
  return {
    type: "SET_MOVIE_DETAIL",
    payload,
  };
};

export const fetchMovieSearch = (search) => {
  const initialSearch = "man";
  return async (dispatch) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=f901f867&s=${
        search ? search : initialSearch
      }`
    );
    const data = await response.json();
    dispatch(setMovie(data.Search));
  };
};

export const fetchMovieDetail = (id) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=f901f867&i=${id}`
    );
    const data = await response.json();
    dispatch(setMovieDetail(data));
  };
};
