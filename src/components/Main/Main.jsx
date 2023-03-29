import { useEffect, useState } from "react";
import NavMovies from "../NavMovies/navMovies";
import { fetchTopRatedApi } from "../../utils/fetchApi";
import ResultItem from "../ResultItem/ResultIem";

function Main() {
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    return () => {
      fetchTopRatedApi().then((res) => {
        setSearchMovies(res);
      });
    };
  }, []);

  return (
    <section className='main-container'>
      <NavMovies setSearchMovies={setSearchMovies} />

      <div className='result-container'>
        {searchMovies.map((item) => {
          return <ResultItem key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
}

export default Main;
