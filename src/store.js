export const initialStore = () => {
  return {
    character: [],
    planet: [],
    vehicle: [],
    favorites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'get_character':
      return {
        ...store,
        character: action.payload
      };

    case 'get_planet':
      return {
        ...store,
        planet: action.payload
      };

    case 'get_vehicle':
      return {
        ...store,
        vehicle: action.payload
      };

    case 'ADD_FAVORITE':
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };

    case 'REMOVE_FAVORITE':
      return {
        ...store,
        favorites: store.favorites.filter(item => item.id !== action.payload)
      };

    default:
      return store;
  }
}
