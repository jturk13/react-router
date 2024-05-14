// VendingMachine.js
import React from 'react';
import { Link } from 'react-router-dom';

const VendingMachine = () => {
  return (
    <div>
      <h1>Vending Machine</h1>
      <ul>
        <li>
          <Link to="/snack/1">Snack 1</Link>
        </li>
        <li>
          <Link to="/snack/2">Snack 2</Link>
        </li>
        <li>
          <Link to="/snack/3">Snack 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default VendingMachine;
