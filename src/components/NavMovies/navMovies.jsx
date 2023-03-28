import { fetchTopRatedApi, fetchTrendingApi } from "../../utils/fetchApi";
import SearchForm from "../Search/SearchForm";

function NavMovies({ setMovies, setSearchParams }) {
  return (
    <div className='search-container'>
      <ul className='search-list '>
        <li
          className='search-item'
          onClick={() => {
            let params = "top_rated";

            setSearchParams(params);
            fetchTopRatedApi(params).then((res) => {
              setMovies(res);
            });
          }}
        >
          Top Rate Movies
        </li>
        <li
          className='search-item '
          onClick={() => {
            let params = "trending";

            setSearchParams(params);

            fetchTrendingApi(params).then((res) => {
              setMovies(res);
            });
          }}
        >
          Top Trend Movies
        </li>
      </ul>
      <SearchForm setMovies={setMovies} setSearchParams={setSearchParams} />
    </div>
  );
}

export default NavMovies;
