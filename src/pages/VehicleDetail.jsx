import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const VehicleDetail = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.tech/api/vehicles/${id}/`)
      .then(res => res.json())
      .then(data => setVehicle(data));
  }, [id]);

  if (!vehicle) return <div className="text-center">Loading...</div>;

  const properties = vehicle.result?.properties;
  const imageUrl = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/starships/${id}.jpg`;

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
                    <li className="list-group-item"><strong>Model:</strong> {properties?.model}</li>
                    <li className="list-group-item"><strong>Manufacturer:</strong> {properties?.manufacturer}</li>
                    <li className="list-group-item"><strong>Cost in Credits:</strong> {properties?.cost_in_credits}</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-group">
                    <li className="list-group-item"><strong>Length:</strong> {properties?.length} meters</li>
                    <li className="list-group-item"><strong>Max Speed:</strong> {properties?.max_atmosphering_speed}</li>
                    <li className="list-group-item"><strong>Crew:</strong> {properties?.crew}</li>
                    <li className="list-group-item"><strong>Passengers:</strong> {properties?.passengers}</li>
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