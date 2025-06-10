
export const fetchCharacters = async (dispatch) => {
    try {
        const response = await fetch("https://swapi.tech/api/people/");
        if (!response.ok) throw new Error("Error al cargar personajes");
        const data = await response.json();
        dispatch({ type: 'get_character', payload: data.results })
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
};

export const fetchPlanets = async (dispatch) => {
    try {
        const response = await fetch("https://www.swapi.tech/api/planets");
        if (!response.ok) throw new Error("Error al cargar planetas");
        const data = await response.json();
        dispatch({ type: 'get_planet', payload: data.results })
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
};

export const fetchVehicles = async (dispatch) => {
    try {
        const response = await fetch("https://www.swapi.tech/api/vehicles");
        if (!response.ok) throw new Error("Error al cargar vehículos");
        const data = await response.json();
        dispatch({ type: 'get_vehicle', payload: data.results })
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
};


