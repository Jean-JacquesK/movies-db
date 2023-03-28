const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchTrendingApi = async (params) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${params}/movie/day?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchTopRatedApi = async (params) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${params}?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSearchApi = async (value) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${value}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchIdApi = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
