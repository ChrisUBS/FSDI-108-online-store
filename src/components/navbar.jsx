import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container">
                <a className="navbar-brand text-white fw-bold" href="#">
                    SuperMarket
                </a>
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
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">
                                🔑 Log In
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">
                                🔍 Search
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">
                                🛒 Subscribe
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">
                                ☰ Menu
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
