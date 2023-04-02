import React from 'react'
import Button from '@mui/material/Button'
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';
import { useContext } from "react";
import cartContext from "../Context/cartContext";

function ShoppingCart() {
  const { getCountInCart } = useContext(cartContext);

let cartCount= getCountInCart

  return (
    <div> 
      <Button variant="contained" startIcon={<ShoppingCartRounded />}>
       {cartCount}      </Button>
  </div>
  );
}

export default ShoppingCart;