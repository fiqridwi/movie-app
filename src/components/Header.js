import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Search from "./Search";

const Header = ({ title, search, setSearch }) => {
  return (
    <Navbar bg="dark" expand="lg" style={{ padding: "1rem" }}>
      <Container>
        <Navbar.Brand style={{ color: "white", fontWeight: "bolder" }} href="/">
          {title}
        </Navbar.Brand>{" "}
        <Search search={search} setSearch={setSearch} />
      </Container>
    </Navbar>
  );
};

export default Header;
