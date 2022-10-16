import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../hooks";

export const Navbar = () => {
  const { status } = useAuth();

  const renderLinks = () => {
    if (status === "auth") {
      return (
        <Link
          className="btn btn-primary"
          style={{ borderRadius: 5 }}
          aria-current="page"
          to="/app"
        >
          Ingresar al sistema
        </Link>
      );
    }

    return (
      <>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            aria-current="page"
            to="/auth/login"
          >
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            aria-current="page"
            to="/auth/register"
          >
            Register
          </NavLink>
        </li>
      </>
    );
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MERN-AUTH-REDUX-JWT-COOKIES
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                aria-current="page"
                to="/"
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                aria-current="page"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">{renderLinks()}</ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
