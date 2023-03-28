import ResultItem from "../ResultItem/ResultIem";

function Result({ movies }) {
  return (
    <div className='result-container'>
      {movies.map((item) => {
        return <ResultItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Result;
