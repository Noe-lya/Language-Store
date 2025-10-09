import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top py-1 navbar-color">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/assets/logo.png" alt="Language Store" width={140} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item menu-link">
              <Link className="nav-link active" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Idiomas
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/mundo/América">
                    América
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/mundo/Europa">
                    Europa
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/mundo/Asia">
                    Asia
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/mundo/Oceanía">
                    Oceanía
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/mundo/África">
                    África
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/mundo">
                    Mundo
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item menu-link">
              <Link className="nav-link active" to="/contacto">
                Contacto
              </Link>
            </li>
            <li className="nav-item menu-link">
              <Link className="nav-link active" to="/carrito">
                Carrito
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
