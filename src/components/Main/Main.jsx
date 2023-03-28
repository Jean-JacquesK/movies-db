import { useState } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import Result from "../Result/Result";
import NavMovies from "../NavMovies/navMovies";
import ItemDetails from "../ItemDetails/ItemDetails";

function Main() {
  const [movies, setMovies] = useState([]);

  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <section className='main-container'>
      <NavMovies setMovies={setMovies} setSearchParams={setSearchParams} />

      <Routes>
        <Route path='/' element={<Result movies={movies} />} />
        <Route path='movies/details/:id' element={<ItemDetails />} />
      </Routes>
    </section>
  );
}

export default Main;
