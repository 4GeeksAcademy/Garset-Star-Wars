import { Link } from "react-router-dom";

export const Navbar = () => {
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
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-warning">Check the Context in action</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

//favoritos en check 