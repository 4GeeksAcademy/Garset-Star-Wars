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

  const properties = planet.result?.properties;
  const imageUrl = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${id}.jpg`;

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
                    <li className="list-group-item"><strong>Diameter:</strong> {properties?.diameter} km</li>
                    <li className="list-group-item"><strong>Rotation Period:</strong> {properties?.rotation_period} hours</li>
                    <li className="list-group-item"><strong>Orbital Period:</strong> {properties?.orbital_period} days</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-group">
                    <li className="list-group-item"><strong>Gravity:</strong> {properties?.gravity}</li>
                    <li className="list-group-item"><strong>Population:</strong> {properties?.population}</li>
                    <li className="list-group-item"><strong>Climate:</strong> {properties?.climate}</li>
                    <li className="list-group-item"><strong>Terrain:</strong> {properties?.terrain}</li>
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