import { useParams } from "react-router-dom";
import { fetchIdApi } from "../../utils/fetchApi";

async function ItemDetails({ id }) {
  id = useParams();
  console.log("ID", id);

  const movie = await fetchIdApi(id.id);

  return (
    <div>
      <div>
        <h1>Titre</h1>
        <img src='img' alt='img name' />
      </div>
    </div>
  );
}

export default ItemDetails;
