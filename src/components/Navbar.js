import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "aos/dist/aos.css";

import styled from "styled-components";

const StyleNav = styled.div`
  .justify-content-end {
    left: 100;
    color: var(--blue);
  }
  .navbarText {
    color: var(--blue);
  }
`;

function TopNav() {
  const [expanded, setExpanded] = useState(false);

  return (
    <StyleNav>
      <Navbar
        onToggle={(expanded) =>
          expanded
            ? setExpanded(expanded)
            : setTimeout(() => {
                setExpanded(expanded);
              }, 1000)
        }
        collapseOnSelect
        style={{
          position: "absolute",
          backgroundColor: "var(--dark-navy",
          top: "1%",
          right: "2%",
        }}
        expand="md"
      >
        <Container data-aos="fade-right">
          <Navbar.Toggle
            style={{
              color: "green",
              backgroundColor: 'var(--blue)',
              // maxWidth: 200,
            }}
            aria-controls={`offcanvasNavbar-expand-sm`}
          />
          <Navbar.Offcanvas
            style={{
              color: "green",
              backgroundColor: !expanded ? "var(--navy-blue)" : "var(--light-navy",
              maxWidth: 200,
            }}
            expand={"sm"}
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  style={{ color: "var(--blue)" }}
                  // onClick={() => window.location.href='https://www.google.com'}
                >
                  Contact
                </Nav.Link>
                <Nav.Link style={{ color: "var(--blue)" }} href="#link">
                  Link
                </Nav.Link>
                <Nav.Link style={{ color: "var(--blue)" }} href="#link">
                  Link
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </StyleNav>
  );
}

export default TopNav;
