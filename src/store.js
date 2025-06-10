export const initialStore = () => {
  return {
    character: [],
    planet: [],
    vehicle: []
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


    default:
      throw Error('Unknown action.');
  }
}
