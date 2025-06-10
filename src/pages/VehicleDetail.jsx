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

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h2>{vehicle.name}</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Model:</strong> {vehicle.model}</li>
                <li className="list-group-item"><strong>Manufacturer:</strong> {vehicle.manufacturer}</li>
                <li className="list-group-item"><strong>Cost in Credits:</strong> {vehicle.cost_in_credits}</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item"><strong>Length:</strong> {vehicle.length} meters</li>
                <li className="list-group-item"><strong>Max Speed:</strong> {vehicle.max_atmosphering_speed}</li>
                <li className="list-group-item"><strong>Crew:</strong> {vehicle.crew}</li>
                <li className="list-group-item"><strong>Passengers:</strong> {vehicle.passengers}</li>
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