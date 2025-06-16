import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();
  const [showDropdown, setShowDropdown] = useState(false);

  const removeFavorite = (id) => {
    dispatch({
      type: 'REMOVE_FAVORITE',
      payload: id
    });
  };

  return (
    <nav className="navbar navbar-black bg-black">
      <div className="container">
        <Link to="/" className="d-flex align-items-center">
          <img 
            src="src/assets/img/logo.png" 
            alt="Logo" 
            style={{ height: '70px', marginRight: '50px' }}
          />
        </Link>
        <div className="dropdown position-static">
          <button 
            className="btn btn-warning dropdown-toggle"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            ⚔️ Favorites ({store.favorites.length})
          </button>
          
          {showDropdown && (
            <div className="dropdown-menu show bg-dark border-warning"
              style={{
                right: 0,
                left: 'auto',
                maxHeight: '300px',
                overflowY: 'auto'
              }}>
              {store.favorites.length === 0 ? (
                <span className="dropdown-item text-warning">No favorites yet</span>
              ) : (
                store.favorites.map(fav => (
                  <div key={fav.id} className="dropdown-item text-warning d-flex justify-content-between">
                    {fav.name}
                    <button 
                      className="btn btn-sm btn-outline-danger"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFavorite(fav.id);
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};