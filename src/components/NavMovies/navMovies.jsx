import { fetchTopRatedApi, fetchTrendingApi } from "../../utils/fetchApi";
import SearchForm from "../Search/SearchForm";

function NavMovies({ setSearchMovies }) {
  return (
    <div className='search-container'>
      <ul className='search-list '>
        <li
          className='search-item'
          onClick={() => {
            fetchTopRatedApi().then((res) => {
              setSearchMovies(res);
            });
          }}
        >
          Top Rate Movies
        </li>
        <li
          className='search-item '
          onClick={() => {
            fetchTrendingApi().then((res) => {
              setSearchMovies(res);
            });
          }}
        >
          Top Trend Movies
        </li>
      </ul>
      <SearchForm setSearchMovies={setSearchMovies} />
    </div>
  );
}

export default NavMovies;
