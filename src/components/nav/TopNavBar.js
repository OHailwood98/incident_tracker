import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

import { logout } from "../../redux/actions/userActions";
import logo from "../../static/logo512.png";

function TopNavBar() {
  const isAuthed = useSelector((state) => !!state.user.token);
  const username = useSelector((state) => !!state.user.username) || null;
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Brands Hatch"
            className="d-inline-block align-top"
            height="51"
          />
        </Navbar.Brand>
        <Nav variant="tabs" defaultActiveKey={window.location.pathname}>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/incidents">Incidents</Nav.Link>
          </Nav.Item>
        </Nav>
        {isAuthed && (
          <NavDropdown title={username} id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Button as={Link} to="/" onClick={() => logout()}>
                Logout
              </Button>
            </NavDropdown.Item>
          </NavDropdown>
        )}
      </Navbar>
    </div>
  );
}

export default TopNavBar;
