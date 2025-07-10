import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { fetchAllCategories } from "../../Features/Category/CategorySlice";

function TopNavbar({ darkMode, toggleMode }) {
  const { categories } = useSelector((state) => state.categories);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <Navbar   bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg"  >
      <Container>
        <NavLink to={"/"} className={"navbar-brand"}>
          Shop Now
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {categories &&
                categories.map((c, index) => {
                  return (
                    <div>
                    <Link
                      to={`/category/${c}`}
                      className="text-capitalize dropdown-item"
                      key={index}
                    >
                      {c}
                    </Link>

                   
                    </div>
                  );
                })}
            </NavDropdown>
            <NavLink to={"/products"} className="nav-link">
              Products
            </NavLink>
            <NavLink to={"/contact"} className="nav-link">
              Contact
            </NavLink>
            <NavLink to={"/login"} className="nav-link">
              Login
            </NavLink>
            <NavLink to={"/signup"} className="nav-link">
              SignUp
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <button className="mode" onClick={toggleMode} style={{ marginLeft: '1rem' }}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
