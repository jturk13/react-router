import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Snack = () => {
  const { id } = useParams();
  
  // Mock data for snacks
  const snacks = {
    1: "Chips",
    2: "Chocolate",
    3: "Cookies"
  };

  return (
    <div>
      <h2>{snacks[id]}</h2>
      <p>This is the {snacks[id]} snack.</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Snack;
