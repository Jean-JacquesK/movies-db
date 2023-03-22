import { useState } from "react";
import { fetchTopRatedApi, fetchTrendingApi } from "../../utils/fetchApi";
import { useSearchParams } from "react-router-dom";
import Result from "../Result/Result";
import SearchForm from "../Search/SearchForm";

function Main() {
  const [movies, setMovies] = useState([]);

  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <section className='main-container'>
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
      <div className='result-container'>
        {movies.map((item) => {
          return <Result key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
}

export default Main;
