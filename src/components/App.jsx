import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import VendingMachine from './VendingMachine';

const App = () => (
  <div>
    <Navbar color="dark" dark>
      <NavbarBrand href="/">Virtual Vending Machine</NavbarBrand>
    </Navbar>
    <VendingMachine />
  </div>
);

export default App;
