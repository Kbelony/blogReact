import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Navbar = () => {
  const isLocalhost =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";

  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light mb-3">
      <div className="container">
        <a className="navbar-brand" href="https://kbelony.github.io/blogReact/">
          <img
            id="Logo"
            src="https://uploads-ssl.webflow.com/63f29d4eb366b713474ba881/6446760426bdb95288c586ef_LogoNomWhite.png"
            alt="Logo"
            draggable="false"
            height="30"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        {isLocalhost && (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link mx-2" href="blogReact/create">
                  <FontAwesomeIcon icon={faPlus} />
                  Create
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="blogReact/delete">
                  <FontAwesomeIcon icon={faMinus} />
                  Delete
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
