import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const PlanetDetail = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.tech/api/planets/${id}/`)
      .then(res => res.json())
      .then(data => setPlanet(data));
  }, [id]);

  if (!planet) return <div className="text-center">Loading...</div>;

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h2>{planet.name}</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Diameter:</strong> {planet.diameter} km</li>
                <li className="list-group-item"><strong>Rotation Period:</strong> {planet.rotation_period} hours</li>
                <li className="list-group-item"><strong>Orbital Period:</strong> {planet.orbital_period} days</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Gravity:</strong> {planet.gravity}</li>
                <li className="list-group-item"><strong>Population:</strong> {planet.population}</li>
                <li className="list-group-item"><strong>Climate:</strong> {planet.climate}</li>
                <li className="list-group-item"><strong>Terrain:</strong> {planet.terrain}</li>
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