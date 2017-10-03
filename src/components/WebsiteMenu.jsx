import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import {HashLink as Link} from 'react-router-hash-link';

const NavLink = ({to, text}) => {
  return (
    <li>
      <Link to={to}>{text}</Link>
    </li>
  );
};

const WebsiteMenu = ({openModalWindowsFunc, selection}) => {
  let activeKey = 1;
  let navItemClass = 'nav-item';

  if (selection && selection === 'menu') {
    activeKey = 2;
    navItemClass = 'nav-item active';
  }

  return (
    <Navbar inverse fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">
          <img src="img/valys.jpeg" /></a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav activeKey={activeKey}>
          <NavItem eventKey={1} href="/#postres">
            Inicio
          </NavItem>
        <NavDropdown eventKey={2} title="Productos" id="basic-nav-dropdown">
          <NavLink to="" text="Bizcochos o muffins" />
          <MenuItem divider />
          <NavLink to="" text="Tartaletas" />
          <MenuItem divider />
          <NavLink to="" text="Barritas energéticas" />
          <MenuItem divider />
          <NavLink to="" text="Galletas" />
        </NavDropdown>
        <NavDropdown eventKey={3} title="Catering" id="basic-nav-dropdown">
          <NavLink to="" text="Coffee chat" />
          <MenuItem divider />
          <NavLink to="" text="Eventos" />
          <MenuItem divider />
          <NavLink to="" text="Cumpleaños saludables" />
        </NavDropdown>
        <NavItem eventKey={4} href="">
          Talleres
        </NavItem>
        <NavItem eventKey={5}>
          Contacto
        </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

WebsiteMenu.propTypes = {
  openModalWindowsFunc: React.PropTypes.object.isRequired,
  selection: React.PropTypes.string,
};

export default WebsiteMenu;
