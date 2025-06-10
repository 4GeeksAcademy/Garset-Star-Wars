import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";


export const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.tech/api/people/${id}/`)
      .then(res => res.json())
      .then(data => setCharacter(data));
  }, [id]);

  if (!character) return <div className="text-center">Loading...</div>;

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h2>{character.name}</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Height:</strong> {character.height}</li>
                <li className="list-group-item"><strong>Mass:</strong> {character.mass}</li>
                <li className="list-group-item"><strong>Gender:</strong> {character.gender}</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Birth Year:</strong> {character.birth_year}</li>
                <li className="list-group-item"><strong>Eye Color:</strong> {character.eye_color}</li>
                <li className="list-group-item"><strong>Hair Color:</strong> {character.hair_color}</li>
              </ul>
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