import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import learnItLogo from "../../assets/logo.svg";
import logoutIcon from "../../assets/logout.svg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const NavbarMenu = () => {
  const {authState: {user: {username}}, logoutUser} = useContext(AuthContext);

  const logout = () => {
    logoutUser();
  }
  
  return (
    <Navbar expand="lg" bg="primary" variant="dark" className="shadow">
      <Navbar.Brand className="fw-bolder text-white ms-2">
        <img
          src={learnItLogo}
          alt="learnItLogo"
          width="32"
          height="32"
          className="me-2"
        />
        Learn It
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            className="fw-bolder text-white"
            to="/dashboard"
            as={Link}
          >
            Dashboard
          </Nav.Link>
          <Nav.Link
            className="fw-bolder text-white"
            to="/about"
            as={Link}
          >
            About
          </Nav.Link>
        </Nav>

        <Nav className="me-2">
          <Nav.Link className="fw-bolder text-white" disabled>
            Welcome {username}
          </Nav.Link>
          <Button variant='secondary' className="fw-bolder text-white" onClick={logout}>
            <img
              src={logoutIcon}
              alt="logoutIcon"
              width="32"
              height="32"
              className="me-2"
            />
            Log out
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMenu;
