import { useState } from "react";
import "./result.css";

function Result({ item }) {
  const [onFlip, setOnFlip] = useState(false);

  function handleClick() {
    setOnFlip(!onFlip);
  }

  return (
    <div
      className={!onFlip ? "result-items" : "result-items back"}
      onClick={handleClick}
    >
      {!onFlip && (
        <div className='item-box'>
          <h3 className='result-title'>{item.title}</h3>
          <img
            className='result-img'
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            alt={`${item.title} picture`}
          />
        </div>
      )}

      {onFlip && (
        <div className='result-details'>
          <h4 className='result-title'>{item.title}</h4>
          <p>{item.overview}</p>
          <p>Completion date : {item.release_date}</p>
          <p>Average note : {item.vote_average} </p>
        </div>
      )}
    </div>
  );
}

export default Result;
