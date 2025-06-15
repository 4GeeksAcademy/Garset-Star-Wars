import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.tech/api/people/${id}`)
      .then(res => res.json())
      .then(data => setCharacter(data));
  }, [id]);
  
  if (!character) return <div className="text-center">Loading...</div>;

  const properties = character.result?.properties;
  const imageUrl = `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${id}.jpg`;

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h2>{properties?.name}</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 mb-3">
             <img
                src={imageUrl}
                className="card-img-top img-fluid rounded"
                alt={properties?.name}
                onError={(e) => {
                  e.target.src = "https://placehold.co/400x200?text=Imagen+no+disponible";
                }}
              />
            </div> 
             <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-group">
                    <li className="list-group-item"><strong>Height:</strong> {properties?.height}</li>
                    <li className="list-group-item"><strong>Mass:</strong> {properties?.mass}</li>
                    <li className="list-group-item"><strong>Gender:</strong> {properties?.gender}</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-group">
                    <li className="list-group-item"><strong>Birth Year:</strong> {properties?.birth_year}</li>
                    <li className="list-group-item"><strong>Eye Color:</strong> {properties?.eye_color}</li>
                    <li className="list-group-item"><strong>Hair Color:</strong> {properties?.hair_color}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <Link to="/" className="btn btn-warning">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};