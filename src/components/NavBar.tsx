import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#85ce2f" }}
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Smart MoNoSyTe
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Current Data
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/overall">
                  Overall Data
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/legend">
                  Legend
                </Link>
              </li>
            </ul>
          </div>
          <span className="navbar-text justify-content-end">
            Smart Monitoring and Notification System for Terrariums
          </span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
