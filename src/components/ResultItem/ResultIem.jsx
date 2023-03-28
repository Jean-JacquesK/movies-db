import { Link } from "react-router-dom";
import "./resultItem.css";

function ResultItem({ item }) {
  return (
    <Link to={`movies/details/${item.id}`} className='result-items'>
      <div className='item-box front'>
        <h3 className='result-title'>{item.title}</h3>
        <img
          className='result-img'
          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          alt={`${item.title} picture`}
        />
      </div>

      <div className='item-box back'>
        <h4 className='result-title'>{item.title}</h4>
        <p className='result-para'>{item.overview}</p>
        <p>Completion date : {item.release_date}</p>
        <p>Average note : {item.vote_average} </p>
      </div>
    </Link>
  );
}

export default ResultItem;
