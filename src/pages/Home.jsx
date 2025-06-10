import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { fetchCharacters, fetchPlanets, fetchVehicles } from "../fetch/fetchApi.js";
import { CharacterDetail } from "./CharacterDetail.jsx";
import { PlanetDetail } from "./PlanetDetail.jsx";
import { VehicleDetail } from "./VehicleDetail.jsx";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer()
	const [error, setError] = useState(null);

	console.log(store.character)

	useEffect(() => {

		fetchCharacters(dispatch);
		fetchPlanets(dispatch);
		fetchVehicles(dispatch);
	}, []);

	const extractIdFromUrl = (url) => {
		const id = url.match(/\/(\d+)\/$/)?.[1];
		return id || "1";
	};

	if (error) return <div className="text-center mt-5">Error: {error}</div>;

	return (
		<div className="bg-black">
			<div className="container mt-5" bg-black  >
				<>
					<h1 className="text-center mb-4 text-warning">Star Wars Characters</h1>
					{store.character.length == 0 ? <div className="text-center mt-5">Loading...</div> :
						<div className="d-flex overflow-auto pb-3" style={{ gap: '1rem' }}>
							{store.character.map((character) => {
								const id = extractIdFromUrl(character.url);
								const imageUrl = `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${id}.jpg`;
								return (
									<div key={id} className="flex-shrink-0" style={{ width: '300px' }}>
										<div className="card h-100 shadow-sm" style={{ minHeight: '400px' }}>
											<img
												src={imageUrl}
												className="card-img-top"
												alt={character.name}
												onError={(e) => {
													e.target.src = "https://placehold.co/400x200?text=Imagen+no+disponible";
												}}
											/>
											<div className="card-body">
												<h5 className="card-title">{character.name}</h5>
												<button
													className="btn btn-warning btn-sm"
													onClick={() => navigate(`/characters/:${id}`)}    //me falta conectar
												>
													Details
												</button>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					}</>

				<>
					<h1 className="text-center mb-4 text-warning">Star Wars Planets</h1>
					{store.planet.length == 0 ? <div className="text-center mt-5">Loading...</div> :
						<div className="d-flex overflow-auto pb-3" style={{ gap: '1rem' }}>
							{store.planet.map((planet) => {
								const id = extractIdFromUrl(planet.url);
								const imageUrl = 
								`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${id}.jpg`;
								return (
									<div key={id} className="flex-shrink-0" style={{ width: '300px' }}>
										<div className="card h-100 shadow-sm" style={{ minHeight: '400px' }}>
											<img
												src={imageUrl}
												className="card-img-top"
												alt={planet.name}
												onError={(e) => {
													e.target.src = "https://placehold.co/400x200?text=Imagen+no+disponible";
												}}
											/>
											<div className="card-body">
												<h5 className="card-title">{planet.name}</h5>
												<button
													className="btn btn-warning btn-sm"
													onClick={() => navigate(`planets/${id}`)}
												>
													Details
												</button>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					}</>

				<>
					<h1 className="text-center mb-4 text-warning">Star Wars Vehicles</h1>
					{store.vehicle.length == 0 ? <div className="text-center mt-5">Loading...</div> :
						<div className="d-flex overflow-auto pb-3" style={{ gap: '1rem' }}>
							{store.vehicle.map((vehicle) => {
								const id = extractIdFromUrl(vehicle.url);
								const imageUrl = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/starships/${id}`;
								return (
									<div key={id} className="flex-shrink-0" style={{ width: '300px' }}>
										<div className="card h-100 shadow-sm" style={{ minHeight: '400px' }}>
											<img
												src={imageUrl}
												className="card-img-top"
												alt={vehicle.name}
												onError={(e) => {
													e.target.src = "https://placehold.co/400x200?text=Imagen+no+disponible";
												}}
											/>
											<div className="card-body">
												<h5 className="card-title">{vehicle.name}</h5>
												<button
													className="btn btn-warning btn-sm"
													onClick={() => navigate(`/vehicles:/${id}`)}
												>
													Details
												</button>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					}</>

			</div>
			</div>
			);
};