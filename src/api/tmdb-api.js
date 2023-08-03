const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzM1ZGNiOThlMmY0M2NhOTVmZDFjODkzODc0ZDg5NiIsInN1YiI6IjY0YzgwYWFkMDk3YzQ5MDBhZDAzZWE5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OrwfUL55hDPiliYFKwVCvdJ0i5o4oWpC03Y3Pg8Fyts',
  },
};

export const getTrending = async () => {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    );

    if (!response.ok) {
      throw new Error('Network response is failed');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );

    if (!response.ok) {
      throw new Error('Network response is failed');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getCast = async movieId => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    );

    if (!response.ok) {
      throw new Error('Network response is failed');
    }

    const data = await response.json();
    return data.cast;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getReviews = async movieId => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
      options
    );

    if (!response.ok) {
      throw new Error('Network response is failed');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getMovies = async query => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    );

    if (!response.ok) {
      throw new Error('Network response is failed');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return error;
  }
};
